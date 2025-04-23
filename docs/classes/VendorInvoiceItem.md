[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceItem

# Class: VendorInvoiceItem

Describes the parameters that constitute an item associated to a vendor invoice

**`Generated`**

from message Scailo.VendorInvoiceItem

## Hierarchy

- `Message`\<[`VendorInvoiceItem`](VendorInvoiceItem.md)\>

  ↳ **`VendorInvoiceItem`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceItem.md#constructor)

### Properties

- [approvalMetadata](VendorInvoiceItem.md#approvalmetadata)
- [entityUuid](VendorInvoiceItem.md#entityuuid)
- [familyId](VendorInvoiceItem.md#familyid)
- [familyUuid](VendorInvoiceItem.md#familyuuid)
- [internalQuantity](VendorInvoiceItem.md#internalquantity)
- [metadata](VendorInvoiceItem.md#metadata)
- [needApproval](VendorInvoiceItem.md#needapproval)
- [roundOff](VendorInvoiceItem.md#roundoff)
- [specifications](VendorInvoiceItem.md#specifications)
- [taxGroupId](VendorInvoiceItem.md#taxgroupid)
- [userComment](VendorInvoiceItem.md#usercomment)
- [vendorInvoiceId](VendorInvoiceItem.md#vendorinvoiceid)
- [vendorInvoiceUuid](VendorInvoiceItem.md#vendorinvoiceuuid)
- [vendorQuantity](VendorInvoiceItem.md#vendorquantity)
- [vendorUnitPrice](VendorInvoiceItem.md#vendorunitprice)
- [vendorUomId](VendorInvoiceItem.md#vendoruomid)
- [fields](VendorInvoiceItem.md#fields)
- [runtime](VendorInvoiceItem.md#runtime)
- [typeName](VendorInvoiceItem.md#typename)

### Methods

- [clone](VendorInvoiceItem.md#clone)
- [equals](VendorInvoiceItem.md#equals)
- [fromBinary](VendorInvoiceItem.md#frombinary)
- [fromJson](VendorInvoiceItem.md#fromjson)
- [fromJsonString](VendorInvoiceItem.md#fromjsonstring)
- [getType](VendorInvoiceItem.md#gettype)
- [toBinary](VendorInvoiceItem.md#tobinary)
- [toJSON](VendorInvoiceItem.md#tojson)
- [toJson](VendorInvoiceItem.md#tojson-1)
- [toJsonString](VendorInvoiceItem.md#tojsonstring)
- [equals](VendorInvoiceItem.md#equals-1)
- [fromBinary](VendorInvoiceItem.md#frombinary-1)
- [fromJson](VendorInvoiceItem.md#fromjson-1)
- [fromJsonString](VendorInvoiceItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceItem**(`data?`): [`VendorInvoiceItem`](VendorInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceItem`](VendorInvoiceItem.md)\> |

#### Returns

[`VendorInvoiceItem`](VendorInvoiceItem.md)

#### Overrides

Message\&lt;VendorInvoiceItem\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:1231

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1135

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1121

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1163

___

### familyUuid

• **familyUuid**: `string` = `""`

The UUID of the associated family

----------------------------------------

**`Generated`**

from field: string family_uuid = 111;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1229

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1170

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this vendor invoice

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1128

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1142

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1205

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1212

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1198

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1149

___

### vendorInvoiceId

• **vendorInvoiceId**: `bigint` = `protoInt64.zero`

Stores the vendor invoice ID

**`Generated`**

from field: uint64 vendor_invoice_id = 10;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1156

___

### vendorInvoiceUuid

• **vendorInvoiceUuid**: `string` = `""`

----------------------------------------
The UUID of the associated vendor invoice

**`Generated`**

from field: string vendor_invoice_uuid = 110;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1220

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1184

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1191

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1177

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1238

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1236

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceItem"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:1237

## Methods

### clone

▸ **clone**(): [`VendorInvoiceItem`](VendorInvoiceItem.md)

Create a deep copy.

#### Returns

[`VendorInvoiceItem`](VendorInvoiceItem.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceItem`](VendorInvoiceItem.md) \| `PlainMessage`\<[`VendorInvoiceItem`](VendorInvoiceItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceItem`](VendorInvoiceItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceItem`](VendorInvoiceItem.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceItem`](VendorInvoiceItem.md) \| `PlainMessage`\<[`VendorInvoiceItem`](VendorInvoiceItem.md)\> |
| `b` | `undefined` \| [`VendorInvoiceItem`](VendorInvoiceItem.md) \| `PlainMessage`\<[`VendorInvoiceItem`](VendorInvoiceItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1269

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceItem`](VendorInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceItem`](VendorInvoiceItem.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1257

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceItem`](VendorInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceItem`](VendorInvoiceItem.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1261

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceItem`](VendorInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceItem`](VendorInvoiceItem.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1265
