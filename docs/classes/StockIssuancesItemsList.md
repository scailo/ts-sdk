[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesItemsList

# Class: StockIssuancesItemsList

Describes the message consisting of the list of stock issuance items

**`Generated`**

from message Scailo.StockIssuancesItemsList

## Hierarchy

- `Message`\<[`StockIssuancesItemsList`](StockIssuancesItemsList.md)\>

  ↳ **`StockIssuancesItemsList`**

## Table of contents

### Constructors

- [constructor](StockIssuancesItemsList.md#constructor)

### Properties

- [list](StockIssuancesItemsList.md#list)
- [fields](StockIssuancesItemsList.md#fields)
- [runtime](StockIssuancesItemsList.md#runtime)
- [typeName](StockIssuancesItemsList.md#typename)

### Methods

- [clone](StockIssuancesItemsList.md#clone)
- [equals](StockIssuancesItemsList.md#equals)
- [fromBinary](StockIssuancesItemsList.md#frombinary)
- [fromJson](StockIssuancesItemsList.md#fromjson)
- [fromJsonString](StockIssuancesItemsList.md#fromjsonstring)
- [getType](StockIssuancesItemsList.md#gettype)
- [toBinary](StockIssuancesItemsList.md#tobinary)
- [toJSON](StockIssuancesItemsList.md#tojson)
- [toJson](StockIssuancesItemsList.md#tojson-1)
- [toJsonString](StockIssuancesItemsList.md#tojsonstring)
- [equals](StockIssuancesItemsList.md#equals-1)
- [fromBinary](StockIssuancesItemsList.md#frombinary-1)
- [fromJson](StockIssuancesItemsList.md#fromjson-1)
- [fromJsonString](StockIssuancesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesItemsList**(`data?`): [`StockIssuancesItemsList`](StockIssuancesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesItemsList`](StockIssuancesItemsList.md)\> |

#### Returns

[`StockIssuancesItemsList`](StockIssuancesItemsList.md)

#### Overrides

Message\&lt;StockIssuancesItemsList\&gt;.constructor

#### Defined in

src/stock_issuances.scailo_pb.ts:925

## Properties

### list

• **list**: [`StockIssuanceItem`](StockIssuanceItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.StockIssuanceItem list = 1;

#### Defined in

src/stock_issuances.scailo_pb.ts:923

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_issuances.scailo_pb.ts:932

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_issuances.scailo_pb.ts:930

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesItemsList"``

#### Defined in

src/stock_issuances.scailo_pb.ts:931

## Methods

### clone

▸ **clone**(): [`StockIssuancesItemsList`](StockIssuancesItemsList.md)

Create a deep copy.

#### Returns

[`StockIssuancesItemsList`](StockIssuancesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesItemsList`](StockIssuancesItemsList.md) \| `PlainMessage`\<[`StockIssuancesItemsList`](StockIssuancesItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesItemsList`](StockIssuancesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesItemsList`](StockIssuancesItemsList.md)\>

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
| `a` | `undefined` \| [`StockIssuancesItemsList`](StockIssuancesItemsList.md) \| `PlainMessage`\<[`StockIssuancesItemsList`](StockIssuancesItemsList.md)\> |
| `b` | `undefined` \| [`StockIssuancesItemsList`](StockIssuancesItemsList.md) \| `PlainMessage`\<[`StockIssuancesItemsList`](StockIssuancesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_issuances.scailo_pb.ts:948

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesItemsList`](StockIssuancesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesItemsList`](StockIssuancesItemsList.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:936

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesItemsList`](StockIssuancesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesItemsList`](StockIssuancesItemsList.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:940

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesItemsList`](StockIssuancesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesItemsList`](StockIssuancesItemsList.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:944
