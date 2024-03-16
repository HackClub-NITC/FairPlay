<<<<<<< HEAD
import React from "react";

import "./FiveFive.css";
=======
import React, { useState } from 'react';
import './FiveFive.css'
>>>>>>> Matrix1

const matrix5x5 = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 26],
];

const Fivefive = () => {
<<<<<<< HEAD
	return (
		<div>
			<div className="0" class="row">
				<div className="box" id="00">
					<p>{matrix5x5[0][0]}</p>
				</div>
				<div className="box" id="01">
					<p>{matrix5x5[0][1]}</p>
				</div>
				<div className="box" id="02">
					<p>{matrix5x5[0][2]}</p>
				</div>
				<div className="box" id="03">
					<p>{matrix5x5[0][3]}</p>
				</div>
				<div className="box" id="04">
					<p>{matrix5x5[0][4]}</p>
				</div>
			</div>
=======
  return (

    
    <div>

<button onClick={toggleColor}>Toggle Color</button>
      <table>
        <tbody>
          {Array.from({ length: 5 }).map((_, row) => (
            <tr key={row}>
              {Array.from({ length: 5 }).map((_, col) => {
                const index = row * 5 + col;
                let color = showGreen && index < words.length ? 'green' : 'black';
                return (
                  <td key={col} style={{ color }}>
                    {words[index] || ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>


      <div className="0" class="row">
        <div className="box" id="00"><p>{matrix5x5[0][0]}</p></div>
        <div className="box" id="01"><p>{matrix5x5[0][1]}</p></div>
        <div className="box" id="02"><p>{matrix5x5[0][2]}</p></div>
        <div className="box" id="03"><p>{matrix5x5[0][3]}</p></div>
        <div className="box" id="04"><p>{matrix5x5[0][4]}</p></div>
      </div>
>>>>>>> Matrix1

			<div className="1" class="row">
				<div className="box" id="10">
					<p>{matrix5x5[1][0]}</p>
				</div>
				<div className="box" id="11">
					<p>{matrix5x5[1][1]}</p>
				</div>
				<div className="box" id="12">
					<p>{matrix5x5[1][2]}</p>
				</div>
				<div className="box" id="13">
					<p>{matrix5x5[1][3]}</p>
				</div>
				<div className="box" id="14">
					<p>{matrix5x5[1][4]}</p>
				</div>
			</div>

			<div className="2" class="row">
				<div className="box" id="20">
					<p>{matrix5x5[2][0]}</p>
				</div>
				<div className="box" id="21">
					<p>{matrix5x5[2][1]}</p>
				</div>
				<div className="box" id="22">
					<p>{matrix5x5[2][2]}</p>
				</div>
				<div className="box" id="23">
					<p>{matrix5x5[2][3]}</p>
				</div>
				<div className="box" id="24">
					<p>{matrix5x5[2][4]}</p>
				</div>
			</div>

			<div className="2" class="row">
				<div className="box" id="30">
					<p>{matrix5x5[3][0]}</p>
				</div>
				<div className="box" id="31">
					<p>{matrix5x5[3][1]}</p>
				</div>
				<div className="box" id="32">
					<p>{matrix5x5[3][2]}</p>
				</div>
				<div className="box" id="33">
					<p>{matrix5x5[3][3]}</p>
				</div>
				<div className="box" id="34">
					<p>{matrix5x5[3][4]}</p>
				</div>
			</div>

			<div className="3" class="row">
				<div className="box" id="40">
					<p>{matrix5x5[4][0]}</p>
				</div>
				<div className="box" id="41">
					<p>{matrix5x5[4][1]}</p>
				</div>
				<div className="box" id="42">
					<p>{matrix5x5[4][2]}</p>
				</div>
				<div className="box" id="43">
					<p>{matrix5x5[4][3]}</p>
				</div>
				<div className="box" id="44">
					<p>{matrix5x5[4][4]}</p>
				</div>
			</div>

			<div className="4" class="row">
				<div className="20"></div>
				<div className="21"></div>
				<div className="22"></div>
				<div className="23"></div>
				<div className="24"></div>
			</div>
		</div>
	);
};

export default Fivefive;
