#Index

**Modules**

* [mumble](#module_mumble)
  * [class: Mumble ⏏](#exp_module_mumble)
    * [new Mumble(options)](#exp_new_module_mumble)
    * [mumble.start()](#module_mumble#start)
    * [mumble.stop()](#module_mumble#stop)
    * [mumble.isAvailable()](#module_mumble#isAvailable)
    * [mumble.getSpeechRecognitionObject()](#module_mumble#getSpeechRecognitionObject)
    * [mumble.addCommand(name, command, action)](#module_mumble#addCommand)
    * [mumble.removeCommand(name)](#module_mumble#removeCommand)
    * [mumble.getCommand(name)](#module_mumble#getCommand)
    * [mumble.setLanguage(language)](#module_mumble#setLanguage)
    * [mumble.setAutoRestart(autoRestart)](#module_mumble#setAutoRestart)
    * [mumble.setMaxAlternatives(maxAlternatives)](#module_mumble#setMaxAlternatives)
    * [mumble.setContinuous(continuous)](#module_mumble#setContinuous)
    * [mumble.setDebug(debug)](#module_mumble#setDebug)

**Typedefs**

* [callback: speechCallback](#speechCallback)
* [type: command](#command)
* [type: options](#options)
 
<a name="module_mumble"></a>
#mumble
Module mumble.

<a name="exp_module_mumble"></a>
##class: Mumble ⏏
**Members**

* [class: Mumble ⏏](#exp_module_mumble)
  * [new Mumble(options)](#exp_new_module_mumble)
  * [mumble.start()](#module_mumble#start)
  * [mumble.stop()](#module_mumble#stop)
  * [mumble.isAvailable()](#module_mumble#isAvailable)
  * [mumble.getSpeechRecognitionObject()](#module_mumble#getSpeechRecognitionObject)
  * [mumble.addCommand(name, command, action)](#module_mumble#addCommand)
  * [mumble.removeCommand(name)](#module_mumble#removeCommand)
  * [mumble.getCommand(name)](#module_mumble#getCommand)
  * [mumble.setLanguage(language)](#module_mumble#setLanguage)
  * [mumble.setAutoRestart(autoRestart)](#module_mumble#setAutoRestart)
  * [mumble.setMaxAlternatives(maxAlternatives)](#module_mumble#setMaxAlternatives)
  * [mumble.setContinuous(continuous)](#module_mumble#setContinuous)
  * [mumble.setDebug(debug)](#module_mumble#setDebug)

<a name="exp_new_module_mumble"></a>
###new Mumble(options)
Module entrypoint/constructor.

**Params**

- options <code>[options](#options)</code> - An options object.  

<a name="module_mumble#start"></a>
###mumble.start()
Call to start listening for speech.

<a name="module_mumble#stop"></a>
###mumble.stop()
Call to stop listening for speech.

<a name="module_mumble#isAvailable"></a>
###mumble.isAvailable()
Check if the SpeechRecognition object is supported.

**Returns**: `boolean`  
<a name="module_mumble#getSpeechRecognitionObject"></a>
###mumble.getSpeechRecognitionObject()
Gets a reference to the SpeechRecognition object.

**Returns**: `SpeechRecognition`  
<a name="module_mumble#addCommand"></a>
###mumble.addCommand(name, command, action)
Adds a command.The command syntax can be a string with or without any regex instructions,or a RegExp object. Either way it will be converted to a RegExp object withthe ignoreCase flag set.

**Params**

- name `string` - A command identifier.  
- command `string` | `RegExp` - The command in regex form (can be string or object).  
- action `function` - A callback that will be run when the command matches speech.  

<a name="module_mumble#removeCommand"></a>
###mumble.removeCommand(name)
Removes a command.

**Params**

- name `string` - The command identifier.  

<a name="module_mumble#getCommand"></a>
###mumble.getCommand(name)
Gets a previously added command.

**Params**

- name `string` - A command identifier.  

**Returns**: [command](#command) - A command.  
<a name="module_mumble#setLanguage"></a>
###mumble.setLanguage(language)
Sets the language of the speech recognizer.

**Params**

- language `string` - A 4 letter language code (e.g. en-US).  

<a name="module_mumble#setAutoRestart"></a>
###mumble.setAutoRestart(autoRestart)
Sets whether the speech recognizer should be auto restartedafter an "end" event.

**Params**

- autoRestart `boolean`  

<a name="module_mumble#setMaxAlternatives"></a>
###mumble.setMaxAlternatives(maxAlternatives)
Sets the max number of alternative transcripts that thespeech recognizer should return.Mumble will try to match a command to each of these transcripts.

**Params**

- maxAlternatives `integer`  

<a name="module_mumble#setContinuous"></a>
###mumble.setContinuous(continuous)
Sets whether the speech recognizer should act as a dictation device ora one-shot command device.In HTTPS, turn off continuous mode for faster results.In HTTP, turn on continuous mode for much slower results, but no repeating security notices.

**Params**

- continuous `boolean` - The mode of the speech recognizer.  

<a name="module_mumble#setDebug"></a>
###mumble.setDebug(debug)
Enables or disabled debug logging to the console.

**Params**

- debug `boolean`  

<a name="speechCallback"></a>
#callback: speechCallback
Definition of a speech callback.

**Params**

- event `event` - The original event object.  

**Type**: `function`  
<a name="command"></a>
#type: command
Definition of a command object.

**Properties**

- name `string` - The command identifier.  
- command `string` | `RegExp` - The command in regex form (can be string or object).  
- action `function` - A callback that will be run when the command matches speech with the matched parameters.  

**Type**: `object`  
<a name="options"></a>
#type: options
Definition of an options object.

**Properties**

- language `string` - A 4-letter language code, e.g. en-US.  
- autoRestart `boolean` - Whether to allow auto restarting the speech recognizer.  
- continuous `boolean` - Whether the speech recognizer should act as a dictation device.  
- maxAlternatives `integer` - The max number of alternative transcripts from the speech recognizer.  
- debug `boolean` - Whether to enable debug logging.  
- commands <code>[Array.&lt;command&gt;](#command)</code> - An array of commands, can also be added with addCommand().  
- callbacks <code>[Array.&lt;speechCallback&gt;](#speechCallback)</code> - An object describing various callbacks to events.  

**Type**: `object`  
