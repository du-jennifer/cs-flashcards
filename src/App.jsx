import './App.css';
import FlashCard from './components/FlashCard'
import React, { useState, useEffect } from 'react';
import lifoImg from "./images/lifo.jpg";
import binarySearchImg from "./images/binarySearch.png";
import dijkstraImg from "./images/dijkstra.png";
import cpuImg from "./images/cpu.jpg";
import ramImg from "./images/ram.jpg";
import pipelineImg from "./images/pipeline.png";
import httpsImg from "./images/https.jpg";
import dnsImg from "./images/dns.png";
import mitmImg from "./images/mitm.jpg";
import osImg from "./images/os.jpg";
import sqlImg from "./images/sql.jpg";
import atomicityImg from "./images/atomicity.png";

const App = () => {
  const [flashCards, setFlashCards] = useState([
    {
      question: 'Which data structure operates on a Last-In, First-Out (LIFO) basis?',
      answer: 'Stack',
      difficulty: 'easy',
      image: lifoImg
    }, 
    {
      question: 'What is the average-case time complexity of finding an element in a sorted array using Binary Search?',
      answer: 'O(log n)',
      difficulty: 'medium',
      image: binarySearchImg
    }, 
    {
      question: 'Which graph algorithm is used to find the shortest path from a single source vertex to all other vertices in a weighted graph with no negative edge weights?',
      answer: 'Dijkstra\'s Algorithm',
      difficulty: 'hard',
      image: dijkstraImg
    }, 
    {
      question: 'What does the "S" stand for in HTTPS, indicating a secure connection?',
      answer: 'Secure',
      difficulty: 'easy',
      image: httpsImg
    }, 
    {
      question: 'Which protocol is responsible for translating a human-readable domain name (like google.com) into an IP address?',
      answer: 'DNS',
      difficulty: 'medium',
      image: dnsImg
    }, 
    {
      question: 'In cybersecurity, what type of attack involves an attacker placing themselves between two communicating parties to secretly intercept and alter data?',
      answer: 'Man-in-the-Middle (MitM) Attack',
      difficulty: 'hard',
      image: mitmImg
    }, 
    {
      question: 'What does SQL stand for?',
      answer: 'Structured Query Language',
      difficulty: 'easy',
      image: sqlImg
    }, 
    {
      question: 'What is the name of the core component of an Operating System that manages system resources and communication between hardware and software?',
      answer: 'Kernel',
      difficulty: 'medium',
      image: osImg
    }, 
    {
      question: 'In database management, what property ensures that a transaction is completely finished or completely rolled back, leaving no partial state?',
      answer: 'Atomicity',
      difficulty: 'hard',
      image: atomicityImg
    }, 
    {
      question: 'What is considered the "brain" of the computer, responsible for executing instructions?',
      answer: 'CPU',
      difficulty: 'easy',
      image: cpuImg
    }, 
    {
      question: 'Which type of memory is volatile and loses its data when the computer is powered off?',
      answer: 'RAM',
      difficulty: 'medium',
      image: ramImg
    }, 
    {
      question: 'What architectural feature allows a CPU to fetch and execute multiple instructions simultaneously across different stages?',
      answer: 'Pipelining',
      difficulty: 'hard',
      image: pipelineImg
    }
  ])

  useEffect(() => {
    const shuffled = [...flashCards];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setFlashCards(shuffled);
  }, []);

  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    if (index < flashCards.length-1){
      setIndex(index+1); 
    }
  }
  const decreaseIndex = () => {
    if (index > 0){
      setIndex(index-1);
    }
  }
  return (
    <div className="App">
      <h1> Computer Science Flashcards </h1>
      <p> Follow along and learn more about computer science fundamentals! </p>
      <p> Number of Cards: {flashCards.length} </p>
      
      <FlashCard 
        key={index}
        question={flashCards[index].question}
        answer={flashCards[index].answer} 
        difficulty={flashCards[index].difficulty}
        image={flashCards[index].image}
      />
      <div className="button-container"> 
        <button onClick={decreaseIndex}> Previous </button>
        <button onClick={increaseIndex}> Next </button>
      </div>
    </div>
  )
}

export default App