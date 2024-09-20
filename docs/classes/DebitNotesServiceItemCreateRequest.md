[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceItemCreateRequest

# Class: DebitNotesServiceItemCreateRequest

Describes the parameters required to add an item to a debit note

**`Generated`**

from message Scailo.DebitNotesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)\>

  ↳ **`DebitNotesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceItemCreateRequest.md#constructor)

### Properties

- [debitNoteId](DebitNotesServiceItemCreateRequest.md#debitnoteid)
- [familyId](DebitNotesServiceItemCreateRequest.md#familyid)
- [internalQuantity](DebitNotesServiceItemCreateRequest.md#internalquantity)
- [roundOff](DebitNotesServiceItemCreateRequest.md#roundoff)
- [specifications](DebitNotesServiceItemCreateRequest.md#specifications)
- [taxGroupId](DebitNotesServiceItemCreateRequest.md#taxgroupid)
- [userComment](DebitNotesServiceItemCreateRequest.md#usercomment)
- [vendorQuantity](DebitNotesServiceItemCreateRequest.md#vendorquantity)
- [vendorUnitPrice](DebitNotesServiceItemCreateRequest.md#vendorunitprice)
- [vendorUomId](DebitNotesServiceItemCreateRequest.md#vendoruomid)
- [fields](DebitNotesServiceItemCreateRequest.md#fields)
- [runtime](DebitNotesServiceItemCreateRequest.md#runtime)
- [typeName](DebitNotesServiceItemCreateRequest.md#typename)

### Methods

- [clone](DebitNotesServiceItemCreateRequest.md#clone)
- [equals](DebitNotesServiceItemCreateRequest.md#equals)
- [fromBinary](DebitNotesServiceItemCreateRequest.md#frombinary)
- [fromJson](DebitNotesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](DebitNotesServiceItemCreateRequest.md#fromjsonstring)
- [getType](DebitNotesServiceItemCreateRequest.md#gettype)
- [toBinary](DebitNotesServiceItemCreateRequest.md#tobinary)
- [toJSON](DebitNotesServiceItemCreateRequest.md#tojson)
- [toJson](DebitNotesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](DebitNotesServiceItemCreateRequest.md#tojsonstring)
- [equals](DebitNotesServiceItemCreateRequest.md#equals-1)
- [fromBinary](DebitNotesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](DebitNotesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](DebitNotesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceItemCreateRequest**(`data?`): [`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)\> |

#### Returns

[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;DebitNotesServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/debit_notes.scailo_pb.ts:827

## Properties

### debitNoteId

• **debitNoteId**: `bigint` = `protoInt64.zero`

Stores the debit note ID

**`Generated`**

from field: uint64 debit_note_id = 10;

#### Defined in

src/debit_notes.scailo_pb.ts:769

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/debit_notes.scailo_pb.ts:776

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/debit_notes.scailo_pb.ts:783

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

src/debit_notes.scailo_pb.ts:818

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

src/debit_notes.scailo_pb.ts:825

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/debit_notes.scailo_pb.ts:811

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/debit_notes.scailo_pb.ts:762

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/debit_notes.scailo_pb.ts:797

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

src/debit_notes.scailo_pb.ts:804

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/debit_notes.scailo_pb.ts:790

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/debit_notes.scailo_pb.ts:834

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/debit_notes.scailo_pb.ts:832

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceItemCreateRequest"``

#### Defined in

src/debit_notes.scailo_pb.ts:833

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/debit_notes.scailo_pb.ts:859

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:847

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:851

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceItemCreateRequest`](DebitNotesServiceItemCreateRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:855
