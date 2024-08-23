[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceItem

# Class: SalesInvoiceItem

Describes the parameters that constitute an item associated to a sales invoice

**`Generated`**

from message Scailo.SalesInvoiceItem

## Hierarchy

- `Message`\<[`SalesInvoiceItem`](SalesInvoiceItem.md)\>

  ↳ **`SalesInvoiceItem`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceItem.md#constructor)

### Properties

- [approvalMetadata](SalesInvoiceItem.md#approvalmetadata)
- [clientFamilyCode](SalesInvoiceItem.md#clientfamilycode)
- [clientQuantity](SalesInvoiceItem.md#clientquantity)
- [clientUomId](SalesInvoiceItem.md#clientuomid)
- [entityUuid](SalesInvoiceItem.md#entityuuid)
- [familyId](SalesInvoiceItem.md#familyid)
- [internalQuantity](SalesInvoiceItem.md#internalquantity)
- [metadata](SalesInvoiceItem.md#metadata)
- [needApproval](SalesInvoiceItem.md#needapproval)
- [roundOff](SalesInvoiceItem.md#roundoff)
- [salesInvoiceId](SalesInvoiceItem.md#salesinvoiceid)
- [specifications](SalesInvoiceItem.md#specifications)
- [taxGroupId](SalesInvoiceItem.md#taxgroupid)
- [unitPrice](SalesInvoiceItem.md#unitprice)
- [userComment](SalesInvoiceItem.md#usercomment)
- [fields](SalesInvoiceItem.md#fields)
- [runtime](SalesInvoiceItem.md#runtime)
- [typeName](SalesInvoiceItem.md#typename)

### Methods

- [clone](SalesInvoiceItem.md#clone)
- [equals](SalesInvoiceItem.md#equals)
- [fromBinary](SalesInvoiceItem.md#frombinary)
- [fromJson](SalesInvoiceItem.md#fromjson)
- [fromJsonString](SalesInvoiceItem.md#fromjsonstring)
- [getType](SalesInvoiceItem.md#gettype)
- [toBinary](SalesInvoiceItem.md#tobinary)
- [toJSON](SalesInvoiceItem.md#tojson)
- [toJson](SalesInvoiceItem.md#tojson-1)
- [toJsonString](SalesInvoiceItem.md#tojsonstring)
- [equals](SalesInvoiceItem.md#equals-1)
- [fromBinary](SalesInvoiceItem.md#frombinary-1)
- [fromJson](SalesInvoiceItem.md#fromjson-1)
- [fromJsonString](SalesInvoiceItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceItem**(`data?`): [`SalesInvoiceItem`](SalesInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceItem`](SalesInvoiceItem.md)\> |

#### Returns

[`SalesInvoiceItem`](SalesInvoiceItem.md)

#### Overrides

Message\&lt;SalesInvoiceItem\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:1160

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/sales_invoices.scailo_pb.ts:1074

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/sales_invoices.scailo_pb.ts:1130

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/sales_invoices.scailo_pb.ts:1123

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/sales_invoices.scailo_pb.ts:1116

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:1060

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/sales_invoices.scailo_pb.ts:1102

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/sales_invoices.scailo_pb.ts:1109

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales invoice

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:1067

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/sales_invoices.scailo_pb.ts:1081

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/sales_invoices.scailo_pb.ts:1151

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

Stores the sales invoice ID

**`Generated`**

from field: uint64 sales_invoice_id = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:1095

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/sales_invoices.scailo_pb.ts:1158

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

src/sales_invoices.scailo_pb.ts:1144

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

src/sales_invoices.scailo_pb.ts:1137

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/sales_invoices.scailo_pb.ts:1088

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:1167

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:1165

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceItem"``

#### Defined in

src/sales_invoices.scailo_pb.ts:1166

## Methods

### clone

▸ **clone**(): [`SalesInvoiceItem`](SalesInvoiceItem.md)

Create a deep copy.

#### Returns

[`SalesInvoiceItem`](SalesInvoiceItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceItem`](SalesInvoiceItem.md) \| `PlainMessage`\<[`SalesInvoiceItem`](SalesInvoiceItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceItem`](SalesInvoiceItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceItem`](SalesInvoiceItem.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceItem`](SalesInvoiceItem.md) \| `PlainMessage`\<[`SalesInvoiceItem`](SalesInvoiceItem.md)\> |
| `b` | `undefined` \| [`SalesInvoiceItem`](SalesInvoiceItem.md) \| `PlainMessage`\<[`SalesInvoiceItem`](SalesInvoiceItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:1197

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceItem`](SalesInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceItem`](SalesInvoiceItem.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1185

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceItem`](SalesInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItem`](SalesInvoiceItem.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1189

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceItem`](SalesInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItem`](SalesInvoiceItem.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1193
