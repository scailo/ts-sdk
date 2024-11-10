[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceItemsSearchRequest

# Class: VendorInvoiceItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.VendorInvoiceItemsSearchRequest

## Hierarchy

- `Message`\<[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)\>

  ↳ **`VendorInvoiceItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](VendorInvoiceItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](VendorInvoiceItemsSearchRequest.md#approvedonend)
- [approvedOnStart](VendorInvoiceItemsSearchRequest.md#approvedonstart)
- [approverRoleId](VendorInvoiceItemsSearchRequest.md#approverroleid)
- [count](VendorInvoiceItemsSearchRequest.md#count)
- [entityUuid](VendorInvoiceItemsSearchRequest.md#entityuuid)
- [familyId](VendorInvoiceItemsSearchRequest.md#familyid)
- [isActive](VendorInvoiceItemsSearchRequest.md#isactive)
- [offset](VendorInvoiceItemsSearchRequest.md#offset)
- [searchKey](VendorInvoiceItemsSearchRequest.md#searchkey)
- [sortKey](VendorInvoiceItemsSearchRequest.md#sortkey)
- [sortOrder](VendorInvoiceItemsSearchRequest.md#sortorder)
- [status](VendorInvoiceItemsSearchRequest.md#status)
- [taxGroupId](VendorInvoiceItemsSearchRequest.md#taxgroupid)
- [vendorInvoiceId](VendorInvoiceItemsSearchRequest.md#vendorinvoiceid)
- [vendorUomId](VendorInvoiceItemsSearchRequest.md#vendoruomid)
- [fields](VendorInvoiceItemsSearchRequest.md#fields)
- [runtime](VendorInvoiceItemsSearchRequest.md#runtime)
- [typeName](VendorInvoiceItemsSearchRequest.md#typename)

### Methods

- [clone](VendorInvoiceItemsSearchRequest.md#clone)
- [equals](VendorInvoiceItemsSearchRequest.md#equals)
- [fromBinary](VendorInvoiceItemsSearchRequest.md#frombinary)
- [fromJson](VendorInvoiceItemsSearchRequest.md#fromjson)
- [fromJsonString](VendorInvoiceItemsSearchRequest.md#fromjsonstring)
- [getType](VendorInvoiceItemsSearchRequest.md#gettype)
- [toBinary](VendorInvoiceItemsSearchRequest.md#tobinary)
- [toJSON](VendorInvoiceItemsSearchRequest.md#tojson)
- [toJson](VendorInvoiceItemsSearchRequest.md#tojson-1)
- [toJsonString](VendorInvoiceItemsSearchRequest.md#tojsonstring)
- [equals](VendorInvoiceItemsSearchRequest.md#equals-1)
- [fromBinary](VendorInvoiceItemsSearchRequest.md#frombinary-1)
- [fromJson](VendorInvoiceItemsSearchRequest.md#fromjson-1)
- [fromJsonString](VendorInvoiceItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceItemsSearchRequest**(`data?`): [`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)\> |

#### Returns

[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

#### Overrides

Message\&lt;VendorInvoiceItemsSearchRequest\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:2600

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2556

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2549

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2542

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2563

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2500

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2528

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2577

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2493

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2507

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2598

___

### sortKey

• **sortKey**: [`VENDOR_INVOICE_ITEM_SORT_KEY`](../enums/VENDOR_INVOICE_ITEM_SORT_KEY.md) = `VENDOR_INVOICE_ITEM_SORT_KEY.VENDOR_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_INVOICE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2521

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2514

___

### status

• **status**: [`VENDOR_INVOICE_ITEM_STATUS`](../enums/VENDOR_INVOICE_ITEM_STATUS.md) = `VENDOR_INVOICE_ITEM_STATUS.VENDOR_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.VENDOR_INVOICE_ITEM_STATUS status = 7;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2535

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 26;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2591

___

### vendorInvoiceId

• **vendorInvoiceId**: `bigint` = `protoInt64.zero`

The ID of the vendor invoice

**`Generated`**

from field: uint64 vendor_invoice_id = 20;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2570

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 23;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2584

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2607

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2605

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceItemsSearchRequest"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:2606

## Methods

### clone

▸ **clone**(): [`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2638

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2626

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2630

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceItemsSearchRequest`](VendorInvoiceItemsSearchRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2634
