#React-Speech-To-Text

1. __Installation steps for the project__
2. __Code Snippet And Dependencies__
3. __References__


##Installation steps for the project

After cloning the project follow below steps.

Using [npm](https://www.npmjs.com/) run below command.

  ```
  npm install
  ```
Then after installation of the packages run below command.

```
npm start
```

You will get an user interface with click me button. Click it and start talking

##Code Snippet And Dependencies

The main dependency for the project is [speech-to-text](https://www.npmjs.com/package/speech-to-text) which already added in the package.json. To get the package we can run below command.

```
npm install --save speech-to-text
```

Below is the code snippet used for the speech recognization.
```
listenToUser(){
		let onAnythingSaid = (text) =>{
			this.setState({onAnythingSaid: text});
		}

		let onFinalised = (text) => {
			this.setState({onFinalized: text});
		};

		let onFinishedListening = () => {
			this.setState({headerState: 'Please click again to Listen to you'});
			this.setState({onAnythingSaid: ''});
			this.setState({onFinalized: ''});
		}

		try {
			this.setState({headerState: 'I am Listening.. Please talk'});
			const listener = new SpeechToText(onAnythingSaid, onFinalised, onFinishedListening);
			listener.startListening();
		} catch (error) {

		}
	}

```
##References

- https://github.com/magician11/speech-to-text
- https://www.npmjs.com/package/speech-to-text