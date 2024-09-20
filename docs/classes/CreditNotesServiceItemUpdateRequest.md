[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceItemUpdateRequest

# Class: CreditNotesServiceItemUpdateRequest

Describes the parameters required to update an item in a credit note

**`Generated`**

from message Scailo.CreditNotesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)\>

  ↳ **`CreditNotesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](CreditNotesServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](CreditNotesServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](CreditNotesServiceItemUpdateRequest.md#clientuomid)
- [id](CreditNotesServiceItemUpdateRequest.md#id)
- [internalQuantity](CreditNotesServiceItemUpdateRequest.md#internalquantity)
- [roundOff](CreditNotesServiceItemUpdateRequest.md#roundoff)
- [specifications](CreditNotesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](CreditNotesServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](CreditNotesServiceItemUpdateRequest.md#unitprice)
- [userComment](CreditNotesServiceItemUpdateRequest.md#usercomment)
- [fields](CreditNotesServiceItemUpdateRequest.md#fields)
- [runtime](CreditNotesServiceItemUpdateRequest.md#runtime)
- [typeName](CreditNotesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](CreditNotesServiceItemUpdateRequest.md#clone)
- [equals](CreditNotesServiceItemUpdateRequest.md#equals)
- [fromBinary](CreditNotesServiceItemUpdateRequest.md#frombinary)
- [fromJson](CreditNotesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](CreditNotesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](CreditNotesServiceItemUpdateRequest.md#gettype)
- [toBinary](CreditNotesServiceItemUpdateRequest.md#tobinary)
- [toJSON](CreditNotesServiceItemUpdateRequest.md#tojson)
- [toJson](CreditNotesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](CreditNotesServiceItemUpdateRequest.md#tojsonstring)
- [equals](CreditNotesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](CreditNotesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](CreditNotesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](CreditNotesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceItemUpdateRequest**(`data?`): [`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)\> |

#### Returns

[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;CreditNotesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:981

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/credit_notes.scailo_pb.ts:951

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/credit_notes.scailo_pb.ts:944

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/credit_notes.scailo_pb.ts:937

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/credit_notes.scailo_pb.ts:923

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/credit_notes.scailo_pb.ts:930

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/credit_notes.scailo_pb.ts:972

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/credit_notes.scailo_pb.ts:979

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

src/credit_notes.scailo_pb.ts:965

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

src/credit_notes.scailo_pb.ts:958

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:916

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:988

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:986

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceItemUpdateRequest"``

#### Defined in

src/credit_notes.scailo_pb.ts:987

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:1013

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1001

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1005

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceItemUpdateRequest`](CreditNotesServiceItemUpdateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1009
