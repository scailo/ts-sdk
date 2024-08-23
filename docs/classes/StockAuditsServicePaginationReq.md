[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServicePaginationReq

# Class: StockAuditsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.StockAuditsServicePaginationReq

## Hierarchy

- `Message`\<[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)\>

  ↳ **`StockAuditsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](StockAuditsServicePaginationReq.md#constructor)

### Properties

- [count](StockAuditsServicePaginationReq.md#count)
- [isActive](StockAuditsServicePaginationReq.md#isactive)
- [offset](StockAuditsServicePaginationReq.md#offset)
- [sortKey](StockAuditsServicePaginationReq.md#sortkey)
- [sortOrder](StockAuditsServicePaginationReq.md#sortorder)
- [status](StockAuditsServicePaginationReq.md#status)
- [fields](StockAuditsServicePaginationReq.md#fields)
- [runtime](StockAuditsServicePaginationReq.md#runtime)
- [typeName](StockAuditsServicePaginationReq.md#typename)

### Methods

- [clone](StockAuditsServicePaginationReq.md#clone)
- [equals](StockAuditsServicePaginationReq.md#equals)
- [fromBinary](StockAuditsServicePaginationReq.md#frombinary)
- [fromJson](StockAuditsServicePaginationReq.md#fromjson)
- [fromJsonString](StockAuditsServicePaginationReq.md#fromjsonstring)
- [getType](StockAuditsServicePaginationReq.md#gettype)
- [toBinary](StockAuditsServicePaginationReq.md#tobinary)
- [toJSON](StockAuditsServicePaginationReq.md#tojson)
- [toJson](StockAuditsServicePaginationReq.md#tojson-1)
- [toJsonString](StockAuditsServicePaginationReq.md#tojsonstring)
- [equals](StockAuditsServicePaginationReq.md#equals-1)
- [fromBinary](StockAuditsServicePaginationReq.md#frombinary-1)
- [fromJson](StockAuditsServicePaginationReq.md#fromjson-1)
- [fromJsonString](StockAuditsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServicePaginationReq**(`data?`): [`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)\> |

#### Returns

[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

#### Overrides

Message\&lt;StockAuditsServicePaginationReq\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:1021

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/stock_audits.scailo_pb.ts:991

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:984

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/stock_audits.scailo_pb.ts:998

___

### sortKey

• **sortKey**: [`STOCK_AUDIT_SORT_KEY`](../enums/STOCK_AUDIT_SORT_KEY.md) = `STOCK_AUDIT_SORT_KEY.STOCK_AUDIT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STOCK_AUDIT_SORT_KEY sort_key = 5;

#### Defined in

src/stock_audits.scailo_pb.ts:1012

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/stock_audits.scailo_pb.ts:1005

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this stock audit

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/stock_audits.scailo_pb.ts:1019

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:1028

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:1026

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServicePaginationReq"``

#### Defined in

src/stock_audits.scailo_pb.ts:1027

## Methods

### clone

▸ **clone**(): [`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md) \| `PlainMessage`\<[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md) \| `PlainMessage`\<[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md) \| `PlainMessage`\<[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:1049

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1037

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1041

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServicePaginationReq`](StockAuditsServicePaginationReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1045
