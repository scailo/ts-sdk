[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoiceItemsSearchRequest

# Class: ProformaInvoiceItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.ProformaInvoiceItemsSearchRequest

## Hierarchy

- `Message`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\>

  ↳ **`ProformaInvoiceItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoiceItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](ProformaInvoiceItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](ProformaInvoiceItemsSearchRequest.md#approvedonend)
- [approvedOnStart](ProformaInvoiceItemsSearchRequest.md#approvedonstart)
- [approverRoleId](ProformaInvoiceItemsSearchRequest.md#approverroleid)
- [clientFamilyCode](ProformaInvoiceItemsSearchRequest.md#clientfamilycode)
- [clientUomId](ProformaInvoiceItemsSearchRequest.md#clientuomid)
- [count](ProformaInvoiceItemsSearchRequest.md#count)
- [entityUuid](ProformaInvoiceItemsSearchRequest.md#entityuuid)
- [familyId](ProformaInvoiceItemsSearchRequest.md#familyid)
- [isActive](ProformaInvoiceItemsSearchRequest.md#isactive)
- [offset](ProformaInvoiceItemsSearchRequest.md#offset)
- [proformaInvoiceId](ProformaInvoiceItemsSearchRequest.md#proformainvoiceid)
- [searchKey](ProformaInvoiceItemsSearchRequest.md#searchkey)
- [sortKey](ProformaInvoiceItemsSearchRequest.md#sortkey)
- [sortOrder](ProformaInvoiceItemsSearchRequest.md#sortorder)
- [status](ProformaInvoiceItemsSearchRequest.md#status)
- [taxGroupId](ProformaInvoiceItemsSearchRequest.md#taxgroupid)
- [fields](ProformaInvoiceItemsSearchRequest.md#fields)
- [runtime](ProformaInvoiceItemsSearchRequest.md#runtime)
- [typeName](ProformaInvoiceItemsSearchRequest.md#typename)

### Methods

- [clone](ProformaInvoiceItemsSearchRequest.md#clone)
- [equals](ProformaInvoiceItemsSearchRequest.md#equals)
- [fromBinary](ProformaInvoiceItemsSearchRequest.md#frombinary)
- [fromJson](ProformaInvoiceItemsSearchRequest.md#fromjson)
- [fromJsonString](ProformaInvoiceItemsSearchRequest.md#fromjsonstring)
- [getType](ProformaInvoiceItemsSearchRequest.md#gettype)
- [toBinary](ProformaInvoiceItemsSearchRequest.md#tobinary)
- [toJSON](ProformaInvoiceItemsSearchRequest.md#tojson)
- [toJson](ProformaInvoiceItemsSearchRequest.md#tojson-1)
- [toJsonString](ProformaInvoiceItemsSearchRequest.md#tojsonstring)
- [equals](ProformaInvoiceItemsSearchRequest.md#equals-1)
- [fromBinary](ProformaInvoiceItemsSearchRequest.md#frombinary-1)
- [fromJson](ProformaInvoiceItemsSearchRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoiceItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoiceItemsSearchRequest**(`data?`): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\> |

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Overrides

Message\&lt;ProformaInvoiceItemsSearchRequest\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:2460

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2409

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2402

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2395

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2416

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 25;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2444

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 23;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2437

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2353

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2381

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2430

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2346

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2360

___

### proformaInvoiceId

• **proformaInvoiceId**: `bigint` = `protoInt64.zero`

The ID of the proforma invoice

**`Generated`**

from field: uint64 proforma_invoice_id = 20;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2423

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2458

___

### sortKey

• **sortKey**: [`PROFORMA_INVOICE_ITEM_SORT_KEY`](../enums/PROFORMA_INVOICE_ITEM_SORT_KEY.md) = `PROFORMA_INVOICE_ITEM_SORT_KEY.PROFORMA_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2374

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2367

___

### status

• **status**: [`PROFORMA_INVOICE_ITEM_STATUS`](../enums/PROFORMA_INVOICE_ITEM_STATUS.md) = `PROFORMA_INVOICE_ITEM_STATUS.PROFORMA_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_ITEM_STATUS status = 7;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2388

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 27;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2451

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2467

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2465

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoiceItemsSearchRequest"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:2466

## Methods

### clone

▸ **clone**(): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2499

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2487

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2491

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2495
