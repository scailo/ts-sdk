[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNoteItem

# Class: DebitNoteItem

Describes the parameters that constitute an item associated to a debit note

**`Generated`**

from message Scailo.DebitNoteItem

## Hierarchy

- `Message`\<[`DebitNoteItem`](DebitNoteItem.md)\>

  ↳ **`DebitNoteItem`**

## Table of contents

### Constructors

- [constructor](DebitNoteItem.md#constructor)

### Properties

- [approvalMetadata](DebitNoteItem.md#approvalmetadata)
- [debitNoteId](DebitNoteItem.md#debitnoteid)
- [entityUuid](DebitNoteItem.md#entityuuid)
- [familyId](DebitNoteItem.md#familyid)
- [internalQuantity](DebitNoteItem.md#internalquantity)
- [metadata](DebitNoteItem.md#metadata)
- [needApproval](DebitNoteItem.md#needapproval)
- [roundOff](DebitNoteItem.md#roundoff)
- [specifications](DebitNoteItem.md#specifications)
- [taxGroupId](DebitNoteItem.md#taxgroupid)
- [userComment](DebitNoteItem.md#usercomment)
- [vendorQuantity](DebitNoteItem.md#vendorquantity)
- [vendorUnitPrice](DebitNoteItem.md#vendorunitprice)
- [vendorUomId](DebitNoteItem.md#vendoruomid)
- [fields](DebitNoteItem.md#fields)
- [runtime](DebitNoteItem.md#runtime)
- [typeName](DebitNoteItem.md#typename)

### Methods

- [clone](DebitNoteItem.md#clone)
- [equals](DebitNoteItem.md#equals)
- [fromBinary](DebitNoteItem.md#frombinary)
- [fromJson](DebitNoteItem.md#fromjson)
- [fromJsonString](DebitNoteItem.md#fromjsonstring)
- [getType](DebitNoteItem.md#gettype)
- [toBinary](DebitNoteItem.md#tobinary)
- [toJSON](DebitNoteItem.md#tojson)
- [toJson](DebitNoteItem.md#tojson-1)
- [toJsonString](DebitNoteItem.md#tojsonstring)
- [equals](DebitNoteItem.md#equals-1)
- [fromBinary](DebitNoteItem.md#frombinary-1)
- [fromJson](DebitNoteItem.md#fromjson-1)
- [fromJsonString](DebitNoteItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNoteItem**(`data?`): [`DebitNoteItem`](DebitNoteItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNoteItem`](DebitNoteItem.md)\> |

#### Returns

[`DebitNoteItem`](DebitNoteItem.md)

#### Overrides

Message\&lt;DebitNoteItem\&gt;.constructor

#### Defined in

src/debit_notes.scailo_pb.ts:1025

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/debit_notes.scailo_pb.ts:946

___

### debitNoteId

• **debitNoteId**: `bigint` = `protoInt64.zero`

Stores the debit note ID

**`Generated`**

from field: uint64 debit_note_id = 10;

#### Defined in

src/debit_notes.scailo_pb.ts:967

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/debit_notes.scailo_pb.ts:932

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/debit_notes.scailo_pb.ts:974

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/debit_notes.scailo_pb.ts:981

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this debit note

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/debit_notes.scailo_pb.ts:939

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/debit_notes.scailo_pb.ts:953

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

src/debit_notes.scailo_pb.ts:1016

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

src/debit_notes.scailo_pb.ts:1023

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/debit_notes.scailo_pb.ts:1009

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/debit_notes.scailo_pb.ts:960

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/debit_notes.scailo_pb.ts:995

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

src/debit_notes.scailo_pb.ts:1002

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/debit_notes.scailo_pb.ts:988

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/debit_notes.scailo_pb.ts:1032

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/debit_notes.scailo_pb.ts:1030

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNoteItem"``

#### Defined in

src/debit_notes.scailo_pb.ts:1031

## Methods

### clone

▸ **clone**(): [`DebitNoteItem`](DebitNoteItem.md)

Create a deep copy.

#### Returns

[`DebitNoteItem`](DebitNoteItem.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNoteItem`](DebitNoteItem.md) \| `PlainMessage`\<[`DebitNoteItem`](DebitNoteItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNoteItem`](DebitNoteItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNoteItem`](DebitNoteItem.md)\>

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
| `a` | `undefined` \| [`DebitNoteItem`](DebitNoteItem.md) \| `PlainMessage`\<[`DebitNoteItem`](DebitNoteItem.md)\> |
| `b` | `undefined` \| [`DebitNoteItem`](DebitNoteItem.md) \| `PlainMessage`\<[`DebitNoteItem`](DebitNoteItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/debit_notes.scailo_pb.ts:1061

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNoteItem`](DebitNoteItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNoteItem`](DebitNoteItem.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1049

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNoteItem`](DebitNoteItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteItem`](DebitNoteItem.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1053

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNoteItem`](DebitNoteItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteItem`](DebitNoteItem.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1057
