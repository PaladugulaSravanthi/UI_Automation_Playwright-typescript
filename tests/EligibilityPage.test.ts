import test, {expect} from "../Fixtures/test-base";

  test.describe("Verify Error text when applicant does not meet Eligibility Crtiteria", () => {
    //Sample testcase
    test('Verify the title of the page', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await expect(page).toHaveTitle("TSB Mortgages - Mortgage Promise");
    });
  });


    
  



