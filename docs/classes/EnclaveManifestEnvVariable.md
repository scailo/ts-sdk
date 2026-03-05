[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveManifestEnvVariable

# Class: EnclaveManifestEnvVariable

Describes each environment variable that is defined in the Manifest of an Enclave

**`Generated`**

from message Scailo.EnclaveManifestEnvVariable

## Hierarchy

- `Message`\<[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)\>

  ↳ **`EnclaveManifestEnvVariable`**

## Table of contents

### Constructors

- [constructor](EnclaveManifestEnvVariable.md#constructor)

### Properties

- [isSecret](EnclaveManifestEnvVariable.md#issecret)
- [name](EnclaveManifestEnvVariable.md#name)
- [value](EnclaveManifestEnvVariable.md#value)
- [fields](EnclaveManifestEnvVariable.md#fields)
- [runtime](EnclaveManifestEnvVariable.md#runtime)
- [typeName](EnclaveManifestEnvVariable.md#typename)

### Methods

- [clone](EnclaveManifestEnvVariable.md#clone)
- [equals](EnclaveManifestEnvVariable.md#equals)
- [fromBinary](EnclaveManifestEnvVariable.md#frombinary)
- [fromJson](EnclaveManifestEnvVariable.md#fromjson)
- [fromJsonString](EnclaveManifestEnvVariable.md#fromjsonstring)
- [getType](EnclaveManifestEnvVariable.md#gettype)
- [toBinary](EnclaveManifestEnvVariable.md#tobinary)
- [toJSON](EnclaveManifestEnvVariable.md#tojson)
- [toJson](EnclaveManifestEnvVariable.md#tojson-1)
- [toJsonString](EnclaveManifestEnvVariable.md#tojsonstring)
- [equals](EnclaveManifestEnvVariable.md#equals-1)
- [fromBinary](EnclaveManifestEnvVariable.md#frombinary-1)
- [fromJson](EnclaveManifestEnvVariable.md#fromjson-1)
- [fromJsonString](EnclaveManifestEnvVariable.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveManifestEnvVariable**(`data?`): [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)\> |

#### Returns

[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

#### Overrides

Message\&lt;EnclaveManifestEnvVariable\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1138](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1138)

## Properties

### isSecret

• **isSecret**: `boolean` = `false`

Stores if the variable is a secret

**`Generated`**

from field: bool is_secret = 3 [json_name = "is_secret"];

#### Defined in

[src/vault_commons.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1136)

___

### name

• **name**: `string` = `""`

Stores the name of the environment variable

**`Generated`**

from field: string name = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1122)

___

### value

• **value**: `string` = `""`

Stores the default value of the environment variable

**`Generated`**

from field: string value = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1129)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1145](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1145)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1143)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveManifestEnvVariable"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1144](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1144)

## Methods

### clone

▸ **clone**(): [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

Create a deep copy.

#### Returns

[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md) \| `PlainMessage`\<[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)\>

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
| `a` | `undefined` \| [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md) \| `PlainMessage`\<[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)\> |
| `b` | `undefined` \| [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md) \| `PlainMessage`\<[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1163)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1151](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1151)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1155)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveManifestEnvVariable`](EnclaveManifestEnvVariable.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1159](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/vault_commons.scailo_pb.ts#L1159)
