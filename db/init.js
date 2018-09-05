const cds = require('@sap/cds').connect()
cds.run (()=>{"serialized"

  let { ServiceAgreement, ServiceReceiver, PlannedCost,
        BusinessPartner, Company, CostAllocationObject, CostElement } = cds.model.exports

  // ServiceAgreement
  INSERT.into (ServiceAgreement) .columns (
    'status', 'createdAt', 'createdBy', 'changedAt', 'changedBy', 
    'ID', 'serviceType', 'description', 'longDescription', 'validFrom', 'validTo',
    'responsiblePerson', 'approvalPerson', 
    'billingMethod', 'billingFrequency', 'costCollectionMethod', 
    'currency', 'plannedExchangerate', 'plannedmethod',
    'businessPartner_ID', 'costAllocationObject_ID'
  ) .rows (
    [ 'created', 1, 'User', 1, 'User', 
        'SA1',  'overheadCost', '1st Service', '1st Service', 1, 1,
        'User1', 'User2', 
        'plannedCostPlusFixedMargin', 'monthlyWithQuaterlyAdjustment', 'byPlannedEmployeeNumber',
        'EUR', 'monthlyAverage', 'nettingByInhouseBank', 'Project',
        'BP1', 'CA1' ],
  );

  // ServiceReceiver
  INSERT.into(ServiceReceiver).columns(
      'id', 'serviceAgreement_ID', 'businessPartner_ID', 'company_ID', 'costAllocationObject_ID'
  ). rows(
    [ 'SR1', 'SA1', 'BP1', 'CP1', 'CA1' ]
  );

  // PlannedCost
  INSERT.into(PlannedCost).columns(
      'id', 'validFrom', 'validTo', 'costElement_ID', 
      'amount_Amount', 'amount_Currency', 'ServiceAgreement_ID', 'costElement_ID'
  ).rows(
    [ 'PC1', 1,1, 'CE1', 100.00, 'EUR', 'SA1', 'CE1' ]
  );

  // BusinessPartner
  INSERT.into(BusinessPartner).columns(
       'id', 'description'  
  ).rows(
    [ 'BP1', 'Business Partner 1' ]
  );

  // Company
  INSERT.into(Company).columns(
    'id', 'code', 'description'
  ).rows(
    [ 'CP1', '0001', 'Company A'],
    [ 'CP2', '0002', 'Company B']
  );

  // CostAllocationObject 
  INSERT.into(CostAllocationObject).columns(
    'id', 'costAllocationObjectType', 'description'
  ).rows(
    [ 'CA1', 'Project', 'Project I']
  );

  // CostElement
  INSERT.into(CostElement).columns(
    'id', 'description'
  ).rows(
    [ 'CE1', 'Cost Element 1']
  );

////// test reads
  SELECT.from (ServiceAgreement) .then (console.log)
  SELECT.from (ServiceReceiver) .then (console.log)
  SELECT.from (PlannedCost) .then (console.log)
  SELECT.from (BusinessPartner) .then (console.log)
  SELECT.from (Company) .then (console.log)
  SELECT.from (CostAllocationObject) .then (console.log)
  SELECT.from (CostElement) .then (console.log)

  //  SELECT.from (serviceAgreement, ['description']) .where ({ 
//    businesPartner_id: SELECT('id').from(Authors) .where ({name: {like:'%Brontë%'}})
//  }) .then (all => console.log (
//    `\nby Brontës: \n\n  ${all.map(b=>b.title).join('\n  ')}
//  `)) 

}) 