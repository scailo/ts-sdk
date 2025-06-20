[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServicePaginatedItemsResponse

# Class: StockAuditsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.StockAuditsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)\>

  ↳ **`StockAuditsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](StockAuditsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](StockAuditsServicePaginatedItemsResponse.md#count)
- [offset](StockAuditsServicePaginatedItemsResponse.md#offset)
- [payload](StockAuditsServicePaginatedItemsResponse.md#payload)
- [total](StockAuditsServicePaginatedItemsResponse.md#total)
- [fields](StockAuditsServicePaginatedItemsResponse.md#fields)
- [runtime](StockAuditsServicePaginatedItemsResponse.md#runtime)
- [typeName](StockAuditsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](StockAuditsServicePaginatedItemsResponse.md#clone)
- [equals](StockAuditsServicePaginatedItemsResponse.md#equals)
- [fromBinary](StockAuditsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](StockAuditsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](StockAuditsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](StockAuditsServicePaginatedItemsResponse.md#gettype)
- [toBinary](StockAuditsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](StockAuditsServicePaginatedItemsResponse.md#tojson)
- [toJson](StockAuditsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](StockAuditsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](StockAuditsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](StockAuditsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](StockAuditsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](StockAuditsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServicePaginatedItemsResponse**(`data?`): [`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)\> |

#### Returns

[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;StockAuditsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:1795

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:1772

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/stock_audits.scailo_pb.ts:1779

___

### payload

• **payload**: [`StockAuditItem`](StockAuditItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.StockAuditItem payload = 4;

#### Defined in

src/stock_audits.scailo_pb.ts:1793

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/stock_audits.scailo_pb.ts:1786

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:1802

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:1800

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServicePaginatedItemsResponse"``

#### Defined in

src/stock_audits.scailo_pb.ts:1801

## Methods

### clone

▸ **clone**(): [`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:1821

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1809

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1813

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServicePaginatedItemsResponse`](StockAuditsServicePaginatedItemsResponse.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1817
