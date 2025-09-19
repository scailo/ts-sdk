[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceCreateRequest

# Class: CreditNotesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.CreditNotesServiceCreateRequest

## Hierarchy

- `Message`\<[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)\>

  ↳ **`CreditNotesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceCreateRequest.md#constructor)

### Properties

- [bankAccountId](CreditNotesServiceCreateRequest.md#bankaccountid)
- [currencyId](CreditNotesServiceCreateRequest.md#currencyid)
- [entityUuid](CreditNotesServiceCreateRequest.md#entityuuid)
- [formData](CreditNotesServiceCreateRequest.md#formdata)
- [miscellaneousCost](CreditNotesServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](CreditNotesServiceCreateRequest.md#overalldiscount)
- [refFrom](CreditNotesServiceCreateRequest.md#reffrom)
- [refId](CreditNotesServiceCreateRequest.md#refid)
- [referenceId](CreditNotesServiceCreateRequest.md#referenceid)
- [roundOff](CreditNotesServiceCreateRequest.md#roundoff)
- [userComment](CreditNotesServiceCreateRequest.md#usercomment)
- [vaultFolderId](CreditNotesServiceCreateRequest.md#vaultfolderid)
- [fields](CreditNotesServiceCreateRequest.md#fields)
- [runtime](CreditNotesServiceCreateRequest.md#runtime)
- [typeName](CreditNotesServiceCreateRequest.md#typename)

### Methods

- [clone](CreditNotesServiceCreateRequest.md#clone)
- [equals](CreditNotesServiceCreateRequest.md#equals)
- [fromBinary](CreditNotesServiceCreateRequest.md#frombinary)
- [fromJson](CreditNotesServiceCreateRequest.md#fromjson)
- [fromJsonString](CreditNotesServiceCreateRequest.md#fromjsonstring)
- [getType](CreditNotesServiceCreateRequest.md#gettype)
- [toBinary](CreditNotesServiceCreateRequest.md#tobinary)
- [toJSON](CreditNotesServiceCreateRequest.md#tojson)
- [toJson](CreditNotesServiceCreateRequest.md#tojson-1)
- [toJsonString](CreditNotesServiceCreateRequest.md#tojsonstring)
- [equals](CreditNotesServiceCreateRequest.md#equals-1)
- [fromBinary](CreditNotesServiceCreateRequest.md#frombinary-1)
- [fromJson](CreditNotesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](CreditNotesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceCreateRequest**(`data?`): [`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)\> |

#### Returns

[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

#### Overrides

Message\&lt;CreditNotesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L370)

## Properties

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/credit_notes.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L340)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/credit_notes.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L333)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/credit_notes.scailo_pb.ts:291](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L291)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/credit_notes.scailo_pb.ts:368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L368)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

[src/credit_notes.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L347)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

[src/credit_notes.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L354)

___

### refFrom

• **refFrom**: [`CREDIT_NOTE_REF_FROM`](../enums/CREDIT_NOTE_REF_FROM.md) = `CREDIT_NOTE_REF_FROM.CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 12;

#### Defined in

[src/credit_notes.scailo_pb.ts:319](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L319)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/credit_notes.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L326)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the credit note

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/credit_notes.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L312)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/credit_notes.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L361)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/credit_notes.scailo_pb.ts:298](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L298)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/credit_notes.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L305)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L377)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L375)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceCreateRequest"``

#### Defined in

[src/credit_notes.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L376)

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L404)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L392)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:396](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L396)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceCreateRequest`](CreditNotesServiceCreateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:400](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L400)
