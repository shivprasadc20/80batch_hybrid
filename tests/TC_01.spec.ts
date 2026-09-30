// To provide Actual Automation test scripts /steps//
import{test} from '@playwright/test'
import { general } from '../lib/General'
test('TC_01',async function({page})
{
    
 let obj=new general(page)
await obj.openapplication();
await obj.login();
await obj.logout();
console.log("application working");
})

