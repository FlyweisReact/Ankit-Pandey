Before Login:
1. market today data is not appearing, only drawing is displayed on UI , need this to be interactive after showing LTP and PC (if PC is positive then it should appear in green or if negative then in red) -- Done
2. Below space is also empty , try to fill it with proper design
3. under profile simple text is written "Please Login To see Profile Features' ', need to change it to a better UI and also this should appear a bit good
4. When there is no value in the search bar then also the historical data option appears and when the user enters value in it then no data is displayed, need to add the point that "select exchange or symbol before opening historical data" add this line using some design or css , don't just write this text. Once users enter value in both the search then only historical data option should be enabled. -- Done 

After login :
point 1 and 2 same as before  
4. Your account option shows rs 14200 but in actual no balance is present in account
5. Session is continued even after the user closes the window and opens after 24 hrs, session should be logged out automatically after 12 AM midnight everyday
.

For the graph , Current setting shows no data or incorrect data. Use this "https://tradingview.github.io/lightweight-charts/docs" .
This will implement the chart based on data provided to it. data provided will be in 1M format in historical data and for current live feed it should take data from market depth api.
Note: All the charts appearing should appear using this only.


Apart from above points, Below points should also be kept in mind
1. data from all the exchanges should be appearing and saving in db in both historical and market depth (When ever user demands for it)
2. historical data should be in 1m and 1D format , based on requirement
3. For market depth data , OHLC should be saved and other data should be refreshed every 50 seconds and then again OHLC will be saved.
4. Currently search is implemented only for NSE and BSE , Need search for all the exchanges and tokens.


For example :
A user open the webapp and continues without login
User will see login option , search options , windows tab filter option and settings and market today page
Until the user enters any value in the search bar , the windows tab filter will remain disabled. But after the user fills both the search bar then the windows tab filter will be active.
Users can click on any option in the market today page and charts will open with that particular details.
In the Windows tab filter under historical data , both 1 min and 1 day data can be saved.
for charts , user can view real time updation during market hours as values will be picked and refershed every 50 seconds for that particular search symbol from market depth api
charts will be implemented as per https://tradingview.github.io/lightweight-charts/docs
Till user is not signed in, then in this condition data will appear from default account shared with you but profile option will not appear

Now when the same user logs in then also the above points will be valid along with
User will be able to show profile options for his particular account and not for default account.