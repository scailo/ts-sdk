[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoiceItem

# Class: ProformaInvoiceItem

Describes the parameters that constitute an item associated to a proforma invoice

**`Generated`**

from message Scailo.ProformaInvoiceItem

## Hierarchy

- `Message`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\>

  ↳ **`ProformaInvoiceItem`**

## Table of contents

### Constructors

- [constructor](ProformaInvoiceItem.md#constructor)

### Properties

- [approvalMetadata](ProformaInvoiceItem.md#approvalmetadata)
- [clientFamilyCode](ProformaInvoiceItem.md#clientfamilycode)
- [clientQuantity](ProformaInvoiceItem.md#clientquantity)
- [clientUomId](ProformaInvoiceItem.md#clientuomid)
- [entityUuid](ProformaInvoiceItem.md#entityuuid)
- [familyId](ProformaInvoiceItem.md#familyid)
- [internalQuantity](ProformaInvoiceItem.md#internalquantity)
- [metadata](ProformaInvoiceItem.md#metadata)
- [needApproval](ProformaInvoiceItem.md#needapproval)
- [proformaInvoiceId](ProformaInvoiceItem.md#proformainvoiceid)
- [roundOff](ProformaInvoiceItem.md#roundoff)
- [specifications](ProformaInvoiceItem.md#specifications)
- [taxGroupId](ProformaInvoiceItem.md#taxgroupid)
- [unitPrice](ProformaInvoiceItem.md#unitprice)
- [userComment](ProformaInvoiceItem.md#usercomment)
- [fields](ProformaInvoiceItem.md#fields)
- [runtime](ProformaInvoiceItem.md#runtime)
- [typeName](ProformaInvoiceItem.md#typename)

### Methods

- [clone](ProformaInvoiceItem.md#clone)
- [equals](ProformaInvoiceItem.md#equals)
- [fromBinary](ProformaInvoiceItem.md#frombinary)
- [fromJson](ProformaInvoiceItem.md#fromjson)
- [fromJsonString](ProformaInvoiceItem.md#fromjsonstring)
- [getType](ProformaInvoiceItem.md#gettype)
- [toBinary](ProformaInvoiceItem.md#tobinary)
- [toJSON](ProformaInvoiceItem.md#tojson)
- [toJson](ProformaInvoiceItem.md#tojson-1)
- [toJsonString](ProformaInvoiceItem.md#tojsonstring)
- [equals](ProformaInvoiceItem.md#equals-1)
- [fromBinary](ProformaInvoiceItem.md#frombinary-1)
- [fromJson](ProformaInvoiceItem.md#fromjson-1)
- [fromJsonString](ProformaInvoiceItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoiceItem**(`data?`): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\> |

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Overrides

Message\&lt;ProformaInvoiceItem\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:1272

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1186

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1242

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1235

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1228

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1172

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1214

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1221

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this proforma invoice

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1179

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1193

___

### proformaInvoiceId

• **proformaInvoiceId**: `bigint` = `protoInt64.zero`

Stores the proforma invoice ID

**`Generated`**

from field: uint64 proforma_invoice_id = 10;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1207

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1263

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1270

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1256

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1249

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1200

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1279

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1277

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoiceItem"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:1278

## Methods

### clone

▸ **clone**(): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

Create a deep copy.

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoiceItem`](ProformaInvoiceItem.md) \| `PlainMessage`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\>

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
| `a` | `undefined` \| [`ProformaInvoiceItem`](ProformaInvoiceItem.md) \| `PlainMessage`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\> |
| `b` | `undefined` \| [`ProformaInvoiceItem`](ProformaInvoiceItem.md) \| `PlainMessage`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1309

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1297

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1301

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1305
