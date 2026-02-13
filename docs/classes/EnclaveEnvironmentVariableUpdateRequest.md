[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveEnvironmentVariableUpdateRequest

# Class: EnclaveEnvironmentVariableUpdateRequest

Stores the payload that is necessary to update a custom environment variable for an enclave

**`Generated`**

from message Scailo.EnclaveEnvironmentVariableUpdateRequest

## Hierarchy

- `Message`\<[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)\>

  ↳ **`EnclaveEnvironmentVariableUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EnclaveEnvironmentVariableUpdateRequest.md#constructor)

### Properties

- [uuid](EnclaveEnvironmentVariableUpdateRequest.md#uuid)
- [value](EnclaveEnvironmentVariableUpdateRequest.md#value)
- [fields](EnclaveEnvironmentVariableUpdateRequest.md#fields)
- [runtime](EnclaveEnvironmentVariableUpdateRequest.md#runtime)
- [typeName](EnclaveEnvironmentVariableUpdateRequest.md#typename)

### Methods

- [clone](EnclaveEnvironmentVariableUpdateRequest.md#clone)
- [equals](EnclaveEnvironmentVariableUpdateRequest.md#equals)
- [fromBinary](EnclaveEnvironmentVariableUpdateRequest.md#frombinary)
- [fromJson](EnclaveEnvironmentVariableUpdateRequest.md#fromjson)
- [fromJsonString](EnclaveEnvironmentVariableUpdateRequest.md#fromjsonstring)
- [getType](EnclaveEnvironmentVariableUpdateRequest.md#gettype)
- [toBinary](EnclaveEnvironmentVariableUpdateRequest.md#tobinary)
- [toJSON](EnclaveEnvironmentVariableUpdateRequest.md#tojson)
- [toJson](EnclaveEnvironmentVariableUpdateRequest.md#tojson-1)
- [toJsonString](EnclaveEnvironmentVariableUpdateRequest.md#tojsonstring)
- [equals](EnclaveEnvironmentVariableUpdateRequest.md#equals-1)
- [fromBinary](EnclaveEnvironmentVariableUpdateRequest.md#frombinary-1)
- [fromJson](EnclaveEnvironmentVariableUpdateRequest.md#fromjson-1)
- [fromJsonString](EnclaveEnvironmentVariableUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveEnvironmentVariableUpdateRequest**(`data?`): [`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)\> |

#### Returns

[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

#### Overrides

Message\&lt;EnclaveEnvironmentVariableUpdateRequest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1886](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1886)

## Properties

### uuid

• **uuid**: `string` = `""`

The UUID of the environment variables that needs to be updated

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1877](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1877)

___

### value

• **value**: `string` = `""`

The value of the environment variable that needs to be updated

**`Generated`**

from field: string value = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:1884](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1884)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1893](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1893)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1891](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1891)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveEnvironmentVariableUpdateRequest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1892](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1892)

## Methods

### clone

▸ **clone**(): [`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

Create a deep copy.

#### Returns

[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)\> |
| `b` | `undefined` \| [`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1910](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1910)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1898](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1898)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1902](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1902)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariableUpdateRequest`](EnclaveEnvironmentVariableUpdateRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1906](https://github.com/scailo/ts-sdk/blob/7e4aea8e28edb754c0dda1ce402e0f881e38303d/src/vault_commons.scailo_pb.ts#L1906)
