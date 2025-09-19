[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServicePaginatedItemsResponse

# Class: StockIssuancesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.StockIssuancesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)\>

  ↳ **`StockIssuancesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](StockIssuancesServicePaginatedItemsResponse.md#count)
- [offset](StockIssuancesServicePaginatedItemsResponse.md#offset)
- [payload](StockIssuancesServicePaginatedItemsResponse.md#payload)
- [total](StockIssuancesServicePaginatedItemsResponse.md#total)
- [fields](StockIssuancesServicePaginatedItemsResponse.md#fields)
- [runtime](StockIssuancesServicePaginatedItemsResponse.md#runtime)
- [typeName](StockIssuancesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](StockIssuancesServicePaginatedItemsResponse.md#clone)
- [equals](StockIssuancesServicePaginatedItemsResponse.md#equals)
- [fromBinary](StockIssuancesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](StockIssuancesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](StockIssuancesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](StockIssuancesServicePaginatedItemsResponse.md#gettype)
- [toBinary](StockIssuancesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](StockIssuancesServicePaginatedItemsResponse.md#tojson)
- [toJson](StockIssuancesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](StockIssuancesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](StockIssuancesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](StockIssuancesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](StockIssuancesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](StockIssuancesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServicePaginatedItemsResponse**(`data?`): [`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)\> |

#### Returns

[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;StockIssuancesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1982)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/stock_issuances.scailo_pb.ts:1959](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1959)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/stock_issuances.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1966)

___

### payload

• **payload**: [`StockIssuanceItem`](StockIssuanceItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.StockIssuanceItem payload = 4;

#### Defined in

[src/stock_issuances.scailo_pb.ts:1980](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1980)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/stock_issuances.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1973)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1989)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:1987](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1987)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesServicePaginatedItemsResponse"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:1988](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1988)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:2008](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L2008)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:1996](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L1996)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:2000](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L2000)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginatedItemsResponse`](StockIssuancesServicePaginatedItemsResponse.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:2004](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L2004)
