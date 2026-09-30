// To provide test data and objects or elements related to whole application//
import { Page } from '@playwright/test';
export class global {
    constructor(public page: Page) {

    }
    // test data declartion//
    public url = "https://sureshitacademy.in/hrms/login.php";
    public username = " sureshit";
    public password = "sureshit";
    public firstname="Mahendra";
    public lastname="Bahubali";

    // object / locators
    public textbox_loginname = "//input[@name='txtUserName']"
    public textbox_password = "//input[@name='txtPassword']"
    public button_login = "//input[@name='Submit']"
    public button_logout = "//a[text()='Logout']"
    public button_addemployee = "//input[@value='Add']";
    public employinfo = "//iframe[@id='rightMenu']";
    public text_lastname = "//input[@name='txtEmpLastName']"
    public text_firstname = "//input[@name='txtEmpFirstName']"
    public buttonsave = "//input[@class='savebutton']"
    public button_back = "//input[@class='backbutton']"
    public button_upload= "[id='photofile']"


}
