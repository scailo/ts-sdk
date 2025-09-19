[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceCreateRequest

# Class: DebitNotesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.DebitNotesServiceCreateRequest

## Hierarchy

- `Message`\<[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)\>

  ↳ **`DebitNotesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceCreateRequest.md#constructor)

### Properties

- [currencyId](DebitNotesServiceCreateRequest.md#currencyid)
- [entityUuid](DebitNotesServiceCreateRequest.md#entityuuid)
- [formData](DebitNotesServiceCreateRequest.md#formdata)
- [miscellaneousCost](DebitNotesServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](DebitNotesServiceCreateRequest.md#overalldiscount)
- [refFrom](DebitNotesServiceCreateRequest.md#reffrom)
- [refId](DebitNotesServiceCreateRequest.md#refid)
- [referenceId](DebitNotesServiceCreateRequest.md#referenceid)
- [roundOff](DebitNotesServiceCreateRequest.md#roundoff)
- [userComment](DebitNotesServiceCreateRequest.md#usercomment)
- [vaultFolderId](DebitNotesServiceCreateRequest.md#vaultfolderid)
- [fields](DebitNotesServiceCreateRequest.md#fields)
- [runtime](DebitNotesServiceCreateRequest.md#runtime)
- [typeName](DebitNotesServiceCreateRequest.md#typename)

### Methods

- [clone](DebitNotesServiceCreateRequest.md#clone)
- [equals](DebitNotesServiceCreateRequest.md#equals)
- [fromBinary](DebitNotesServiceCreateRequest.md#frombinary)
- [fromJson](DebitNotesServiceCreateRequest.md#fromjson)
- [fromJsonString](DebitNotesServiceCreateRequest.md#fromjsonstring)
- [getType](DebitNotesServiceCreateRequest.md#gettype)
- [toBinary](DebitNotesServiceCreateRequest.md#tobinary)
- [toJSON](DebitNotesServiceCreateRequest.md#tojson)
- [toJson](DebitNotesServiceCreateRequest.md#tojson-1)
- [toJsonString](DebitNotesServiceCreateRequest.md#tojsonstring)
- [equals](DebitNotesServiceCreateRequest.md#equals-1)
- [fromBinary](DebitNotesServiceCreateRequest.md#frombinary-1)
- [fromJson](DebitNotesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](DebitNotesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceCreateRequest**(`data?`): [`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)\> |

#### Returns

[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

#### Overrides

Message\&lt;DebitNotesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:355](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L355)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/debit_notes.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L325)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L283)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/debit_notes.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L353)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 15;

#### Defined in

[src/debit_notes.scailo_pb.ts:332](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L332)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 16;

#### Defined in

[src/debit_notes.scailo_pb.ts:339](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L339)

___

### refFrom

• **refFrom**: [`DEBIT_NOTE_REF_FROM`](../enums/DEBIT_NOTE_REF_FROM.md) = `DEBIT_NOTE_REF_FROM.DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 12;

#### Defined in

[src/debit_notes.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L311)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/debit_notes.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L318)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the debit note

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/debit_notes.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L304)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/debit_notes.scailo_pb.ts:346](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L346)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:290](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L290)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/debit_notes.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L297)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L362)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L360)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceCreateRequest"``

#### Defined in

[src/debit_notes.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L361)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L388)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L376)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L380)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceCreateRequest`](DebitNotesServiceCreateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L384)
