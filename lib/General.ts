//To Provode all reusable functions/methods related to whole application/general Utility functions//
import { expect } from "@playwright/test";
import { global } from "./Global";
export class general extends global {

    async openapplication() {
        await this.page.goto(this.url);
        console.log("Application opened");
    }
    async login() {
        await this.page.locator(this.textbox_loginname).fill(this.username);
        await this.page.locator(this.textbox_password).fill(this.password);
        await this.page.locator(this.button_login).click();
        console.log("Logincompleted");
        console.log('Pageurl is :' + this.page.url());

    }
    async logout() {
        await expect(this.page.locator(this.button_logout)).toBeVisible();
        await this.page.locator(this.button_logout).textContent();
        await this.page.locator(this.button_logout).click();

    }
    async addemployee() {
        const frame = this.page.frameLocator(this.employinfo);
        await frame.locator(this.button_addemployee).click();
        await frame.locator(this.text_firstname).fill(this.firstname)
        await frame.locator(this.text_lastname).fill(this.lastname);
        await(frame.locator(this.button_upload).setInputFiles("C://Users//dell//Downloads//itr1_preview.pdf"));
        console.log("File Uploaded successfully");
        await frame.locator(this.buttonsave).click();

        console.log("New employee added successfully");
        await this.page.waitForTimeout(2000);
        await frame.locator(this.button_back).click();

    }

    async waitStmt() {
        await this.page.waitForTimeout(3000);
        console.log("waited for 3 seconds");
    }



}

