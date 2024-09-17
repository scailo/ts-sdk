[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceItemCreateRequest

# Class: CreditNotesServiceItemCreateRequest

Describes the parameters required to add an item to a credit note

**`Generated`**

from message Scailo.CreditNotesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)\>

  ↳ **`CreditNotesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](CreditNotesServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](CreditNotesServiceItemCreateRequest.md#clientquantity)
- [clientUomId](CreditNotesServiceItemCreateRequest.md#clientuomid)
- [creditNoteId](CreditNotesServiceItemCreateRequest.md#creditnoteid)
- [familyId](CreditNotesServiceItemCreateRequest.md#familyid)
- [internalQuantity](CreditNotesServiceItemCreateRequest.md#internalquantity)
- [roundOff](CreditNotesServiceItemCreateRequest.md#roundoff)
- [specifications](CreditNotesServiceItemCreateRequest.md#specifications)
- [taxGroupId](CreditNotesServiceItemCreateRequest.md#taxgroupid)
- [unitPrice](CreditNotesServiceItemCreateRequest.md#unitprice)
- [userComment](CreditNotesServiceItemCreateRequest.md#usercomment)
- [fields](CreditNotesServiceItemCreateRequest.md#fields)
- [runtime](CreditNotesServiceItemCreateRequest.md#runtime)
- [typeName](CreditNotesServiceItemCreateRequest.md#typename)

### Methods

- [clone](CreditNotesServiceItemCreateRequest.md#clone)
- [equals](CreditNotesServiceItemCreateRequest.md#equals)
- [fromBinary](CreditNotesServiceItemCreateRequest.md#frombinary)
- [fromJson](CreditNotesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](CreditNotesServiceItemCreateRequest.md#fromjsonstring)
- [getType](CreditNotesServiceItemCreateRequest.md#gettype)
- [toBinary](CreditNotesServiceItemCreateRequest.md#tobinary)
- [toJSON](CreditNotesServiceItemCreateRequest.md#tojson)
- [toJson](CreditNotesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](CreditNotesServiceItemCreateRequest.md#tojsonstring)
- [equals](CreditNotesServiceItemCreateRequest.md#equals-1)
- [fromBinary](CreditNotesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](CreditNotesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](CreditNotesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceItemCreateRequest**(`data?`): [`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)\> |

#### Returns

[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;CreditNotesServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:816

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/credit_notes.scailo_pb.ts:786

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/credit_notes.scailo_pb.ts:779

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/credit_notes.scailo_pb.ts:772

___

### creditNoteId

• **creditNoteId**: `bigint` = `protoInt64.zero`

Stores the credit note ID

**`Generated`**

from field: uint64 credit_note_id = 10;

#### Defined in

src/credit_notes.scailo_pb.ts:751

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/credit_notes.scailo_pb.ts:758

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/credit_notes.scailo_pb.ts:765

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/credit_notes.scailo_pb.ts:807

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/credit_notes.scailo_pb.ts:814

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

src/credit_notes.scailo_pb.ts:800

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

src/credit_notes.scailo_pb.ts:793

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:744

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:823

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:821

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceItemCreateRequest"``

#### Defined in

src/credit_notes.scailo_pb.ts:822

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:849

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:837

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:841

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceItemCreateRequest`](CreditNotesServiceItemCreateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:845
