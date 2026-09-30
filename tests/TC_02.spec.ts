// To provide Actual Automation test scripts /steps//
import{test} from '@playwright/test'
import{general} from '../lib/General'
test('TC_02',async ({page})=>
{
let obj=new general(page);
await obj.openapplication();
await obj.waitStmt();
await obj.login();
await obj.waitStmt();
await obj.addemployee();
await obj.waitStmt();
await obj.logout();
await obj.waitStmt();


});
