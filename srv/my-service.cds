
<<<<<<< HEAD
namespace jupiterpa.serviceagreement;
using jupiterpa.serviceagreement as sa from '../db/data-model';
 
service ServiceAgreementService {

	entity ServiceAgreement as projection on sa.ServiceAgreement;
	entity ServiceReceiver as projection on sa.ServiceReceiver; 
	entity PlannedCosts as projection on sa.PlannedCost;

	entity BusinessPartner as projection on sa.BusinessPartner;
	entity Company as projection on sa.Company;
	entity CostAllocationObject as projection on sa.CostAllocationObject;
	entity CostElement as projection on sa.CostElement;
=======

// [ADDING EXTERNAL SERVICE] To add entities from external services:
// [ADDING EXTERNAL SERVICE] - STEP 1 - Add a data model from an external service to the project (by selecting the relevant menu option in SAP Web IDE).
// [ADDING EXTERNAL SERVICE] - STEP 2 - Add a reference to the external service model file:
// using <external_service_name> as <alias_name> from '../srv/external/csn/<external_service_name>';
// Test
service CatalogService { 

	entity MyEntity {
	    key ID : Integer;  
	}

	// [ADDING EXTERNAL SERVICE] - STEP 3 - Add a new entity to the exposed service model:
	// @cds.persistence.skip
	// entity <entity_name> as projection on <alias_name>.<external_entity_name>;

>>>>>>> 830f986c60f15890a00c8993d7241f1ffa8f2c03
}
