/**
 * Bmi856Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { performance } = require('perf_hooks')
module.exports = {


    bmi856: function (req, res) {
        
         var t0 = performance.now();


 

        console.log("req received!");


        if (!(isNaN(req.body.weight)||isNaN(req.body.height))) // (checking for string inputs)
        {
        let weight = req.body.weight;
        let height = req.body.height;
        let bmi = Math.round((weight )/ (height*height));
        console.log("Height"+height+"__Weight"+weight+"__BMI"+bmi);
       
        if (isNaN(bmi))
        {
            bmi = 0;
        }
        // handling negative inputs
        else if (height < 0 || weight < 0)
        {
            bmi = -1;
        }
        var t1 = performance.now();
  
        return res.json({result : bmi,response:(t1-t0)});

        }
        // if any of the inputs are of type string
        else
        {   bmi = -2;
            var t1 = performance.now();
            return res.json({result : bmi,response:(t1-t0)});
        }

       

    }

   

};
