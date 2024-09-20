[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNoteItem

# Class: CreditNoteItem

Describes the parameters that constitute an item associated to a credit note

**`Generated`**

from message Scailo.CreditNoteItem

## Hierarchy

- `Message`\<[`CreditNoteItem`](CreditNoteItem.md)\>

  ↳ **`CreditNoteItem`**

## Table of contents

### Constructors

- [constructor](CreditNoteItem.md#constructor)

### Properties

- [approvalMetadata](CreditNoteItem.md#approvalmetadata)
- [clientFamilyCode](CreditNoteItem.md#clientfamilycode)
- [clientQuantity](CreditNoteItem.md#clientquantity)
- [clientUomId](CreditNoteItem.md#clientuomid)
- [creditNoteId](CreditNoteItem.md#creditnoteid)
- [entityUuid](CreditNoteItem.md#entityuuid)
- [familyId](CreditNoteItem.md#familyid)
- [internalQuantity](CreditNoteItem.md#internalquantity)
- [metadata](CreditNoteItem.md#metadata)
- [needApproval](CreditNoteItem.md#needapproval)
- [roundOff](CreditNoteItem.md#roundoff)
- [specifications](CreditNoteItem.md#specifications)
- [taxGroupId](CreditNoteItem.md#taxgroupid)
- [unitPrice](CreditNoteItem.md#unitprice)
- [userComment](CreditNoteItem.md#usercomment)
- [fields](CreditNoteItem.md#fields)
- [runtime](CreditNoteItem.md#runtime)
- [typeName](CreditNoteItem.md#typename)

### Methods

- [clone](CreditNoteItem.md#clone)
- [equals](CreditNoteItem.md#equals)
- [fromBinary](CreditNoteItem.md#frombinary)
- [fromJson](CreditNoteItem.md#fromjson)
- [fromJsonString](CreditNoteItem.md#fromjsonstring)
- [getType](CreditNoteItem.md#gettype)
- [toBinary](CreditNoteItem.md#tobinary)
- [toJSON](CreditNoteItem.md#tojson)
- [toJson](CreditNoteItem.md#tojson-1)
- [toJsonString](CreditNoteItem.md#tojsonstring)
- [equals](CreditNoteItem.md#equals-1)
- [fromBinary](CreditNoteItem.md#frombinary-1)
- [fromJson](CreditNoteItem.md#fromjson-1)
- [fromJsonString](CreditNoteItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNoteItem**(`data?`): [`CreditNoteItem`](CreditNoteItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNoteItem`](CreditNoteItem.md)\> |

#### Returns

[`CreditNoteItem`](CreditNoteItem.md)

#### Overrides

Message\&lt;CreditNoteItem\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:1130

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/credit_notes.scailo_pb.ts:1044

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/credit_notes.scailo_pb.ts:1100

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/credit_notes.scailo_pb.ts:1093

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/credit_notes.scailo_pb.ts:1086

___

### creditNoteId

• **creditNoteId**: `bigint` = `protoInt64.zero`

Stores the credit note ID

**`Generated`**

from field: uint64 credit_note_id = 10;

#### Defined in

src/credit_notes.scailo_pb.ts:1065

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:1030

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/credit_notes.scailo_pb.ts:1072

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/credit_notes.scailo_pb.ts:1079

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this credit note

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/credit_notes.scailo_pb.ts:1037

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/credit_notes.scailo_pb.ts:1051

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/credit_notes.scailo_pb.ts:1121

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/credit_notes.scailo_pb.ts:1128

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

src/credit_notes.scailo_pb.ts:1114

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

src/credit_notes.scailo_pb.ts:1107

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/credit_notes.scailo_pb.ts:1058

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:1137

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:1135

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNoteItem"``

#### Defined in

src/credit_notes.scailo_pb.ts:1136

## Methods

### clone

▸ **clone**(): [`CreditNoteItem`](CreditNoteItem.md)

Create a deep copy.

#### Returns

[`CreditNoteItem`](CreditNoteItem.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNoteItem`](CreditNoteItem.md) \| `PlainMessage`\<[`CreditNoteItem`](CreditNoteItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNoteItem`](CreditNoteItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNoteItem`](CreditNoteItem.md)\>

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
| `a` | `undefined` \| [`CreditNoteItem`](CreditNoteItem.md) \| `PlainMessage`\<[`CreditNoteItem`](CreditNoteItem.md)\> |
| `b` | `undefined` \| [`CreditNoteItem`](CreditNoteItem.md) \| `PlainMessage`\<[`CreditNoteItem`](CreditNoteItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:1167

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNoteItem`](CreditNoteItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNoteItem`](CreditNoteItem.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1155

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNoteItem`](CreditNoteItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteItem`](CreditNoteItem.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1159

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNoteItem`](CreditNoteItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteItem`](CreditNoteItem.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1163
