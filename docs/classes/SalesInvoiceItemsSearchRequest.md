[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceItemsSearchRequest

# Class: SalesInvoiceItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.SalesInvoiceItemsSearchRequest

## Hierarchy

- `Message`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\>

  ↳ **`SalesInvoiceItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SalesInvoiceItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SalesInvoiceItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SalesInvoiceItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SalesInvoiceItemsSearchRequest.md#approverroleid)
- [clientFamilyCode](SalesInvoiceItemsSearchRequest.md#clientfamilycode)
- [clientUomId](SalesInvoiceItemsSearchRequest.md#clientuomid)
- [count](SalesInvoiceItemsSearchRequest.md#count)
- [entityUuid](SalesInvoiceItemsSearchRequest.md#entityuuid)
- [familyId](SalesInvoiceItemsSearchRequest.md#familyid)
- [isActive](SalesInvoiceItemsSearchRequest.md#isactive)
- [offset](SalesInvoiceItemsSearchRequest.md#offset)
- [salesInvoiceId](SalesInvoiceItemsSearchRequest.md#salesinvoiceid)
- [searchKey](SalesInvoiceItemsSearchRequest.md#searchkey)
- [sortKey](SalesInvoiceItemsSearchRequest.md#sortkey)
- [sortOrder](SalesInvoiceItemsSearchRequest.md#sortorder)
- [status](SalesInvoiceItemsSearchRequest.md#status)
- [taxGroupId](SalesInvoiceItemsSearchRequest.md#taxgroupid)
- [fields](SalesInvoiceItemsSearchRequest.md#fields)
- [runtime](SalesInvoiceItemsSearchRequest.md#runtime)
- [typeName](SalesInvoiceItemsSearchRequest.md#typename)

### Methods

- [clone](SalesInvoiceItemsSearchRequest.md#clone)
- [equals](SalesInvoiceItemsSearchRequest.md#equals)
- [fromBinary](SalesInvoiceItemsSearchRequest.md#frombinary)
- [fromJson](SalesInvoiceItemsSearchRequest.md#fromjson)
- [fromJsonString](SalesInvoiceItemsSearchRequest.md#fromjsonstring)
- [getType](SalesInvoiceItemsSearchRequest.md#gettype)
- [toBinary](SalesInvoiceItemsSearchRequest.md#tobinary)
- [toJSON](SalesInvoiceItemsSearchRequest.md#tojson)
- [toJson](SalesInvoiceItemsSearchRequest.md#tojson-1)
- [toJsonString](SalesInvoiceItemsSearchRequest.md#tojsonstring)
- [equals](SalesInvoiceItemsSearchRequest.md#equals-1)
- [fromBinary](SalesInvoiceItemsSearchRequest.md#frombinary-1)
- [fromJson](SalesInvoiceItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SalesInvoiceItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceItemsSearchRequest**(`data?`): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\> |

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Overrides

Message\&lt;SalesInvoiceItemsSearchRequest\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:2591

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/sales_invoices.scailo_pb.ts:2540

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/sales_invoices.scailo_pb.ts:2533

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:2526

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/sales_invoices.scailo_pb.ts:2547

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 25;

#### Defined in

src/sales_invoices.scailo_pb.ts:2575

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 23;

#### Defined in

src/sales_invoices.scailo_pb.ts:2568

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:2484

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/sales_invoices.scailo_pb.ts:2512

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/sales_invoices.scailo_pb.ts:2561

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:2477

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_invoices.scailo_pb.ts:2491

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

The ID of the sales invoice

**`Generated`**

from field: uint64 sales_invoice_id = 20;

#### Defined in

src/sales_invoices.scailo_pb.ts:2554

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/sales_invoices.scailo_pb.ts:2589

___

### sortKey

• **sortKey**: [`SALES_INVOICE_ITEM_SORT_KEY`](../enums/SALES_INVOICE_ITEM_SORT_KEY.md) = `SALES_INVOICE_ITEM_SORT_KEY.SALES_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_INVOICE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/sales_invoices.scailo_pb.ts:2505

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_invoices.scailo_pb.ts:2498

___

### status

• **status**: [`SALES_INVOICE_ITEM_STATUS`](../enums/SALES_INVOICE_ITEM_STATUS.md) = `SALES_INVOICE_ITEM_STATUS.SALES_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.SALES_INVOICE_ITEM_STATUS status = 7;

#### Defined in

src/sales_invoices.scailo_pb.ts:2519

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 27;

#### Defined in

src/sales_invoices.scailo_pb.ts:2582

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:2598

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:2596

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceItemsSearchRequest"``

#### Defined in

src/sales_invoices.scailo_pb.ts:2597

## Methods

### clone

▸ **clone**(): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:2630

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2618

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2622

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2626
