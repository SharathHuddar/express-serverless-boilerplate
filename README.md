Express Serverless boilerplate
===================

Simple boilerplate for using [expressjs](http://expressjs.com/) with [serverless](https://serverless.com/) framework.

Setup
-----

 Clone the repo and cd into the directory :
	 

    git clone https://github.com/SharathHuddar/express-serverless-boilerplate.git && cd express-serverless-boilerplate/



Install all the dependencies :

    npm install

Install [claudiajs](https://claudiajs.com/) and [serverless](https://www.npmjs.com/package/serverless) :

    npm install -g serverless claudia

Run express server locally :

    npm start

To deploy your app to AWS, first [install](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) aws-cli and then [configure](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) it.

Now, deploy the app using serverless :

    serverless deploy

