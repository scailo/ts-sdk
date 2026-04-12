[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveEnvironmentVariableAddRequest

# Class: EnclaveEnvironmentVariableAddRequest

Stores the payload that is necessary to create a custom environment variable for an enclave

**`Generated`**

from message Scailo.EnclaveEnvironmentVariableAddRequest

## Hierarchy

- `Message`\<[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)\>

  ↳ **`EnclaveEnvironmentVariableAddRequest`**

## Table of contents

### Constructors

- [constructor](EnclaveEnvironmentVariableAddRequest.md#constructor)

### Properties

- [fileUuid](EnclaveEnvironmentVariableAddRequest.md#fileuuid)
- [isSecret](EnclaveEnvironmentVariableAddRequest.md#issecret)
- [name](EnclaveEnvironmentVariableAddRequest.md#name)
- [value](EnclaveEnvironmentVariableAddRequest.md#value)
- [fields](EnclaveEnvironmentVariableAddRequest.md#fields)
- [runtime](EnclaveEnvironmentVariableAddRequest.md#runtime)
- [typeName](EnclaveEnvironmentVariableAddRequest.md#typename)

### Methods

- [clone](EnclaveEnvironmentVariableAddRequest.md#clone)
- [equals](EnclaveEnvironmentVariableAddRequest.md#equals)
- [fromBinary](EnclaveEnvironmentVariableAddRequest.md#frombinary)
- [fromJson](EnclaveEnvironmentVariableAddRequest.md#fromjson)
- [fromJsonString](EnclaveEnvironmentVariableAddRequest.md#fromjsonstring)
- [getType](EnclaveEnvironmentVariableAddRequest.md#gettype)
- [toBinary](EnclaveEnvironmentVariableAddRequest.md#tobinary)
- [toJSON](EnclaveEnvironmentVariableAddRequest.md#tojson)
- [toJson](EnclaveEnvironmentVariableAddRequest.md#tojson-1)
- [toJsonString](EnclaveEnvironmentVariableAddRequest.md#tojsonstring)
- [equals](EnclaveEnvironmentVariableAddRequest.md#equals-1)
- [fromBinary](EnclaveEnvironmentVariableAddRequest.md#frombinary-1)
- [fromJson](EnclaveEnvironmentVariableAddRequest.md#fromjson-1)
- [fromJsonString](EnclaveEnvironmentVariableAddRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveEnvironmentVariableAddRequest**(`data?`): [`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)\> |

#### Returns

[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

#### Overrides

Message\&lt;EnclaveEnvironmentVariableAddRequest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2008](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2008)

## Properties

### fileUuid

• **fileUuid**: `string` = `""`

The UUID of the enclave file that will be updated with the given environment variable

**`Generated`**

from field: string file_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1985](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L1985)

___

### isSecret

• **isSecret**: `boolean` = `false`

Denotes if the value should be stored as a secret (will not be visible to the user post creation)

**`Generated`**

from field: bool is_secret = 13;

#### Defined in

[src/vault_commons.scailo_pb.ts:2006](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2006)

___

### name

• **name**: `string` = `""`

The name of the environment variable

**`Generated`**

from field: string name = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:1992](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L1992)

___

### value

• **value**: `string` = `""`

The value of the environment variable

**`Generated`**

from field: string value = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L1999)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2015](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2015)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2013](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2013)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveEnvironmentVariableAddRequest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2014](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2014)

## Methods

### clone

▸ **clone**(): [`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

Create a deep copy.

#### Returns

[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)\>

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
| `a` | `undefined` \| [`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)\> |
| `b` | `undefined` \| [`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2034](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2034)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2022](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2022)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2026](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2026)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariableAddRequest`](EnclaveEnvironmentVariableAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2030](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vault_commons.scailo_pb.ts#L2030)
