[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveManifest

# Class: EnclaveManifest

Describes the manifest file of an Enclave. Stores the attributes that can be a part of the MANIFEST.yaml file, that is present in the root folder of an Enclave

**`Generated`**

from message Scailo.EnclaveManifest

## Hierarchy

- `Message`\<[`EnclaveManifest`](EnclaveManifest.md)\>

  ↳ **`EnclaveManifest`**

## Table of contents

### Constructors

- [constructor](EnclaveManifest.md#constructor)

### Properties

- [appName](EnclaveManifest.md#appname)
- [appUniqueIdentifier](EnclaveManifest.md#appuniqueidentifier)
- [appVersion](EnclaveManifest.md#appversion)
- [enclaveName](EnclaveManifest.md#enclavename)
- [enclaveRuntime](EnclaveManifest.md#enclaveruntime)
- [entryPointManagement](EnclaveManifest.md#entrypointmanagement)
- [envVariables](EnclaveManifest.md#envvariables)
- [manifestVersion](EnclaveManifest.md#manifestversion)
- [resources](EnclaveManifest.md#resources)
- [startExec](EnclaveManifest.md#startexec)
- [fields](EnclaveManifest.md#fields)
- [runtime](EnclaveManifest.md#runtime)
- [typeName](EnclaveManifest.md#typename)

### Methods

- [clone](EnclaveManifest.md#clone)
- [equals](EnclaveManifest.md#equals)
- [fromBinary](EnclaveManifest.md#frombinary)
- [fromJson](EnclaveManifest.md#fromjson)
- [fromJsonString](EnclaveManifest.md#fromjsonstring)
- [getType](EnclaveManifest.md#gettype)
- [toBinary](EnclaveManifest.md#tobinary)
- [toJSON](EnclaveManifest.md#tojson)
- [toJson](EnclaveManifest.md#tojson-1)
- [toJsonString](EnclaveManifest.md#tojsonstring)
- [equals](EnclaveManifest.md#equals-1)
- [fromBinary](EnclaveManifest.md#frombinary-1)
- [fromJson](EnclaveManifest.md#fromjson-1)
- [fromJsonString](EnclaveManifest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveManifest**(`data?`): [`EnclaveManifest`](EnclaveManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveManifest`](EnclaveManifest.md)\> |

#### Returns

[`EnclaveManifest`](EnclaveManifest.md)

#### Overrides

Message\&lt;EnclaveManifest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1245)

## Properties

### appName

• **appName**: `string` = `""`

Stores the name of the application

**`Generated`**

from field: string app_name = 4 [json_name = "app_name"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1201](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1201)

___

### appUniqueIdentifier

• **appUniqueIdentifier**: `string` = `""`

Stores the unique identifier for the application

**`Generated`**

from field: string app_unique_identifier = 6 [json_name = "app_unique_identifier"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1215)

___

### appVersion

• **appVersion**: `string` = `""`

Stores the application version

**`Generated`**

from field: string app_version = 3 [json_name = "app_version"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1194](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1194)

___

### enclaveName

• **enclaveName**: `string` = `""`

Stores the name of the enclave

**`Generated`**

from field: string enclave_name = 5 [json_name = "enclave_name"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1208](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1208)

___

### enclaveRuntime

• **enclaveRuntime**: `string` = `""`

Stores the enclave runtime (valid options are node, golang, python)

**`Generated`**

from field: string enclave_runtime = 2 [json_name = "enclave_runtime"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1187)

___

### entryPointManagement

• **entryPointManagement**: `string` = `""`

Stores how the entry to the application is to be handled

**`Generated`**

from field: string entry_point_management = 8 [json_name = "entry_point_management"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1229)

___

### envVariables

• **envVariables**: [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)[] = `[]`

Stores the list of default environment variables

**`Generated`**

from field: repeated Scailo.EnclaveManifestEnvVariable env_variables = 9 [json_name = "env_variables"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1236)

___

### manifestVersion

• **manifestVersion**: `string` = `""`

Stores the manifest version

**`Generated`**

from field: string manifest_version = 1 [json_name = "manifest_version"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1180](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1180)

___

### resources

• `Optional` **resources**: [`EnclaveResources`](EnclaveResources.md)

Stores the resources of the Enclave

**`Generated`**

from field: Scailo.EnclaveResources resources = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1243)

___

### startExec

• **startExec**: `string` = `""`

Stores the command that starts the enclave

**`Generated`**

from field: string start_exec = 7 [json_name = "start_exec"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1222)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1252)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1250)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveManifest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1251)

## Methods

### clone

▸ **clone**(): [`EnclaveManifest`](EnclaveManifest.md)

Create a deep copy.

#### Returns

[`EnclaveManifest`](EnclaveManifest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`EnclaveManifest`](EnclaveManifest.md) \| `PlainMessage`\<[`EnclaveManifest`](EnclaveManifest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`EnclaveManifest`](EnclaveManifest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveManifest`](EnclaveManifest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`EnclaveManifest`](EnclaveManifest.md) \| `PlainMessage`\<[`EnclaveManifest`](EnclaveManifest.md)\> |
| `b` | `undefined` \| [`EnclaveManifest`](EnclaveManifest.md) \| `PlainMessage`\<[`EnclaveManifest`](EnclaveManifest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1277)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveManifest`](EnclaveManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveManifest`](EnclaveManifest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1265](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1265)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveManifest`](EnclaveManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveManifest`](EnclaveManifest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1269)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveManifest`](EnclaveManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveManifest`](EnclaveManifest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1273)
