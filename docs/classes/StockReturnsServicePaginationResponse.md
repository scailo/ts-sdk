[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServicePaginationResponse

# Class: StockReturnsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.StockReturnsServicePaginationResponse

## Hierarchy

- `Message`\<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\>

  ↳ **`StockReturnsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](StockReturnsServicePaginationResponse.md#constructor)

### Properties

- [count](StockReturnsServicePaginationResponse.md#count)
- [offset](StockReturnsServicePaginationResponse.md#offset)
- [payload](StockReturnsServicePaginationResponse.md#payload)
- [total](StockReturnsServicePaginationResponse.md#total)
- [fields](StockReturnsServicePaginationResponse.md#fields)
- [runtime](StockReturnsServicePaginationResponse.md#runtime)
- [typeName](StockReturnsServicePaginationResponse.md#typename)

### Methods

- [clone](StockReturnsServicePaginationResponse.md#clone)
- [equals](StockReturnsServicePaginationResponse.md#equals)
- [fromBinary](StockReturnsServicePaginationResponse.md#frombinary)
- [fromJson](StockReturnsServicePaginationResponse.md#fromjson)
- [fromJsonString](StockReturnsServicePaginationResponse.md#fromjsonstring)
- [getType](StockReturnsServicePaginationResponse.md#gettype)
- [toBinary](StockReturnsServicePaginationResponse.md#tobinary)
- [toJSON](StockReturnsServicePaginationResponse.md#tojson)
- [toJson](StockReturnsServicePaginationResponse.md#tojson-1)
- [toJsonString](StockReturnsServicePaginationResponse.md#tojsonstring)
- [equals](StockReturnsServicePaginationResponse.md#equals-1)
- [fromBinary](StockReturnsServicePaginationResponse.md#frombinary-1)
- [fromJson](StockReturnsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](StockReturnsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServicePaginationResponse**(`data?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Overrides

Message\&lt;StockReturnsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/stock_returns.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1366)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/stock_returns.scailo_pb.ts:1336](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1336)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/stock_returns.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1346)

___

### payload

• **payload**: [`StockReturn`](StockReturn.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.StockReturn payload = 4;

#### Defined in

[src/stock_returns.scailo_pb.ts:1364](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1364)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/stock_returns.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1356)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1373)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns.scailo_pb.ts:1371](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1371)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsServicePaginationResponse"``

#### Defined in

[src/stock_returns.scailo_pb.ts:1372](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1372)

## Methods

### clone

▸ **clone**(): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns.scailo_pb.ts:1392](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1392)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:1380](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1380)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1384)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:1388](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L1388)
