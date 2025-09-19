[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesList

# Class: StockIssuancesList

Describes the message consisting of the list of stock issuances

**`Generated`**

from message Scailo.StockIssuancesList

## Hierarchy

- `Message`\<[`StockIssuancesList`](StockIssuancesList.md)\>

  ↳ **`StockIssuancesList`**

## Table of contents

### Constructors

- [constructor](StockIssuancesList.md#constructor)

### Properties

- [list](StockIssuancesList.md#list)
- [fields](StockIssuancesList.md#fields)
- [runtime](StockIssuancesList.md#runtime)
- [typeName](StockIssuancesList.md#typename)

### Methods

- [clone](StockIssuancesList.md#clone)
- [equals](StockIssuancesList.md#equals)
- [fromBinary](StockIssuancesList.md#frombinary)
- [fromJson](StockIssuancesList.md#fromjson)
- [fromJsonString](StockIssuancesList.md#fromjsonstring)
- [getType](StockIssuancesList.md#gettype)
- [toBinary](StockIssuancesList.md#tobinary)
- [toJSON](StockIssuancesList.md#tojson)
- [toJson](StockIssuancesList.md#tojson-1)
- [toJsonString](StockIssuancesList.md#tojsonstring)
- [equals](StockIssuancesList.md#equals-1)
- [fromBinary](StockIssuancesList.md#frombinary-1)
- [fromJson](StockIssuancesList.md#fromjson-1)
- [fromJsonString](StockIssuancesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesList**(`data?`): [`StockIssuancesList`](StockIssuancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesList`](StockIssuancesList.md)\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Overrides

Message\&lt;StockIssuancesList\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L883)

## Properties

### list

• **list**: [`StockIssuance`](StockIssuance.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.StockIssuance list = 1;

#### Defined in

[src/stock_issuances.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L881)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L890)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L888)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesList"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L889)

## Methods

### clone

▸ **clone**(): [`StockIssuancesList`](StockIssuancesList.md)

Create a deep copy.

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesList`](StockIssuancesList.md) \| `PlainMessage`\<[`StockIssuancesList`](StockIssuancesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesList`](StockIssuancesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesList`](StockIssuancesList.md)\>

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
| `a` | `undefined` \| [`StockIssuancesList`](StockIssuancesList.md) \| `PlainMessage`\<[`StockIssuancesList`](StockIssuancesList.md)\> |
| `b` | `undefined` \| [`StockIssuancesList`](StockIssuancesList.md) \| `PlainMessage`\<[`StockIssuancesList`](StockIssuancesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L906)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:894](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L894)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L898)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L902)
