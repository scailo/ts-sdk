[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveDomainsList

# Class: EnclaveDomainsList

Denotes the list of domains that are part of an enclave

**`Generated`**

from message Scailo.EnclaveDomainsList

## Hierarchy

- `Message`\<[`EnclaveDomainsList`](EnclaveDomainsList.md)\>

  ↳ **`EnclaveDomainsList`**

## Table of contents

### Constructors

- [constructor](EnclaveDomainsList.md#constructor)

### Properties

- [list](EnclaveDomainsList.md#list)
- [fields](EnclaveDomainsList.md#fields)
- [runtime](EnclaveDomainsList.md#runtime)
- [typeName](EnclaveDomainsList.md#typename)

### Methods

- [clone](EnclaveDomainsList.md#clone)
- [equals](EnclaveDomainsList.md#equals)
- [fromBinary](EnclaveDomainsList.md#frombinary)
- [fromJson](EnclaveDomainsList.md#fromjson)
- [fromJsonString](EnclaveDomainsList.md#fromjsonstring)
- [getType](EnclaveDomainsList.md#gettype)
- [toBinary](EnclaveDomainsList.md#tobinary)
- [toJSON](EnclaveDomainsList.md#tojson)
- [toJson](EnclaveDomainsList.md#tojson-1)
- [toJsonString](EnclaveDomainsList.md#tojsonstring)
- [equals](EnclaveDomainsList.md#equals-1)
- [fromBinary](EnclaveDomainsList.md#frombinary-1)
- [fromJson](EnclaveDomainsList.md#fromjson-1)
- [fromJsonString](EnclaveDomainsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveDomainsList**(`data?`): [`EnclaveDomainsList`](EnclaveDomainsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveDomainsList`](EnclaveDomainsList.md)\> |

#### Returns

[`EnclaveDomainsList`](EnclaveDomainsList.md)

#### Overrides

Message\&lt;EnclaveDomainsList\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2307](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2307)

## Properties

### list

• **list**: [`EnclaveDomain`](EnclaveDomain.md)[] = `[]`

List of domains

**`Generated`**

from field: repeated Scailo.EnclaveDomain list = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2305](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2305)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2314](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2314)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2312](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2312)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveDomainsList"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2313](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2313)

## Methods

### clone

▸ **clone**(): [`EnclaveDomainsList`](EnclaveDomainsList.md)

Create a deep copy.

#### Returns

[`EnclaveDomainsList`](EnclaveDomainsList.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveDomainsList`](EnclaveDomainsList.md) \| `PlainMessage`\<[`EnclaveDomainsList`](EnclaveDomainsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveDomainsList`](EnclaveDomainsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveDomainsList`](EnclaveDomainsList.md)\>

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
| `a` | `undefined` \| [`EnclaveDomainsList`](EnclaveDomainsList.md) \| `PlainMessage`\<[`EnclaveDomainsList`](EnclaveDomainsList.md)\> |
| `b` | `undefined` \| [`EnclaveDomainsList`](EnclaveDomainsList.md) \| `PlainMessage`\<[`EnclaveDomainsList`](EnclaveDomainsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2330](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2330)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveDomainsList`](EnclaveDomainsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveDomainsList`](EnclaveDomainsList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2318](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2318)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveDomainsList`](EnclaveDomainsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomainsList`](EnclaveDomainsList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2322](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2322)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveDomainsList`](EnclaveDomainsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomainsList`](EnclaveDomainsList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2326](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2326)
