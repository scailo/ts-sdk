[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceSearchAllReq

# Class: SalesInvoicesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SalesInvoicesServiceSearchAllReq

## Hierarchy

- `Message`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

  ↳ **`SalesInvoicesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceSearchAllReq.md#constructor)

### Properties

- [buyerClientId](SalesInvoicesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](SalesInvoicesServiceSearchAllReq.md#consigneeclientid)
- [count](SalesInvoicesServiceSearchAllReq.md#count)
- [entityUuid](SalesInvoicesServiceSearchAllReq.md#entityuuid)
- [isActive](SalesInvoicesServiceSearchAllReq.md#isactive)
- [offset](SalesInvoicesServiceSearchAllReq.md#offset)
- [refFrom](SalesInvoicesServiceSearchAllReq.md#reffrom)
- [refId](SalesInvoicesServiceSearchAllReq.md#refid)
- [searchKey](SalesInvoicesServiceSearchAllReq.md#searchkey)
- [sortKey](SalesInvoicesServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesInvoicesServiceSearchAllReq.md#sortorder)
- [status](SalesInvoicesServiceSearchAllReq.md#status)
- [fields](SalesInvoicesServiceSearchAllReq.md#fields)
- [runtime](SalesInvoicesServiceSearchAllReq.md#runtime)
- [typeName](SalesInvoicesServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesInvoicesServiceSearchAllReq.md#clone)
- [equals](SalesInvoicesServiceSearchAllReq.md#equals)
- [fromBinary](SalesInvoicesServiceSearchAllReq.md#frombinary)
- [fromJson](SalesInvoicesServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesInvoicesServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesInvoicesServiceSearchAllReq.md#gettype)
- [toBinary](SalesInvoicesServiceSearchAllReq.md#tobinary)
- [toJSON](SalesInvoicesServiceSearchAllReq.md#tojson)
- [toJson](SalesInvoicesServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesInvoicesServiceSearchAllReq.md#tojsonstring)
- [equals](SalesInvoicesServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesInvoicesServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesInvoicesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceSearchAllReq**(`data?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Overrides

Message\&lt;SalesInvoicesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:2186

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/sales_invoices.scailo_pb.ts:2184

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/sales_invoices.scailo_pb.ts:2177

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:2113

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/sales_invoices.scailo_pb.ts:2141

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:2106

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_invoices.scailo_pb.ts:2120

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/sales_invoices.scailo_pb.ts:2162

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/sales_invoices.scailo_pb.ts:2169

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/sales_invoices.scailo_pb.ts:2155

___

### sortKey

• **sortKey**: [`SALES_INVOICE_SORT_KEY`](../enums/SALES_INVOICE_SORT_KEY.md) = `SALES_INVOICE_SORT_KEY.SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/sales_invoices.scailo_pb.ts:2134

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_invoices.scailo_pb.ts:2127

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:2148

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:2193

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:2191

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceSearchAllReq"``

#### Defined in

src/sales_invoices.scailo_pb.ts:2192

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:2220

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2208

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2212

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2216
