[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceSearchAllReq

# Class: SalesReturnsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SalesReturnsServiceSearchAllReq

## Hierarchy

- `Message`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

  ↳ **`SalesReturnsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](SalesReturnsServiceSearchAllReq.md#billingstatus)
- [buyerClientId](SalesReturnsServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](SalesReturnsServiceSearchAllReq.md#consigneeclientid)
- [count](SalesReturnsServiceSearchAllReq.md#count)
- [entityUuid](SalesReturnsServiceSearchAllReq.md#entityuuid)
- [isActive](SalesReturnsServiceSearchAllReq.md#isactive)
- [offset](SalesReturnsServiceSearchAllReq.md#offset)
- [refFrom](SalesReturnsServiceSearchAllReq.md#reffrom)
- [refId](SalesReturnsServiceSearchAllReq.md#refid)
- [searchKey](SalesReturnsServiceSearchAllReq.md#searchkey)
- [sortKey](SalesReturnsServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesReturnsServiceSearchAllReq.md#sortorder)
- [status](SalesReturnsServiceSearchAllReq.md#status)
- [fields](SalesReturnsServiceSearchAllReq.md#fields)
- [runtime](SalesReturnsServiceSearchAllReq.md#runtime)
- [typeName](SalesReturnsServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesReturnsServiceSearchAllReq.md#clone)
- [equals](SalesReturnsServiceSearchAllReq.md#equals)
- [fromBinary](SalesReturnsServiceSearchAllReq.md#frombinary)
- [fromJson](SalesReturnsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesReturnsServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesReturnsServiceSearchAllReq.md#gettype)
- [toBinary](SalesReturnsServiceSearchAllReq.md#tobinary)
- [toJSON](SalesReturnsServiceSearchAllReq.md#tojson)
- [toJson](SalesReturnsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesReturnsServiceSearchAllReq.md#tojsonstring)
- [equals](SalesReturnsServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesReturnsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesReturnsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceSearchAllReq**(`data?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Overrides

Message\&lt;SalesReturnsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/sales_returns.scailo_pb.ts:2062

## Properties

### billingStatus

• **billingStatus**: [`SALES_RETURN_BILLING_STATUS`](../enums/SALES_RETURN_BILLING_STATUS.md) = `SALES_RETURN_BILLING_STATUS.SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the sales return bill

**`Generated`**

from field: Scailo.SALES_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

src/sales_returns.scailo_pb.ts:2045

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 61;

#### Defined in

src/sales_returns.scailo_pb.ts:2060

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 60;

#### Defined in

src/sales_returns.scailo_pb.ts:2053

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_returns.scailo_pb.ts:1982

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/sales_returns.scailo_pb.ts:2010

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_returns.scailo_pb.ts:1975

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_returns.scailo_pb.ts:1989

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/sales_returns.scailo_pb.ts:2031

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/sales_returns.scailo_pb.ts:2038

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/sales_returns.scailo_pb.ts:2024

___

### sortKey

• **sortKey**: [`SALES_RETURN_SORT_KEY`](../enums/SALES_RETURN_SORT_KEY.md) = `SALES_RETURN_SORT_KEY.SALES_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_RETURN_SORT_KEY sort_key = 5;

#### Defined in

src/sales_returns.scailo_pb.ts:2003

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_returns.scailo_pb.ts:1996

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/sales_returns.scailo_pb.ts:2017

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_returns.scailo_pb.ts:2069

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_returns.scailo_pb.ts:2067

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServiceSearchAllReq"``

#### Defined in

src/sales_returns.scailo_pb.ts:2068

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_returns.scailo_pb.ts:2097

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

src/sales_returns.scailo_pb.ts:2085

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

src/sales_returns.scailo_pb.ts:2089

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

src/sales_returns.scailo_pb.ts:2093
