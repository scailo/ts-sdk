[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNote

# Class: CreditNote

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.CreditNote

## Hierarchy

- `Message`\<[`CreditNote`](CreditNote.md)\>

  ↳ **`CreditNote`**

## Table of contents

### Constructors

- [constructor](CreditNote.md#constructor)

### Properties

- [approvalMetadata](CreditNote.md#approvalmetadata)
- [bankAccountId](CreditNote.md#bankaccountid)
- [completedOn](CreditNote.md#completedon)
- [currencyId](CreditNote.md#currencyid)
- [entityUuid](CreditNote.md#entityuuid)
- [finalRefNumber](CreditNote.md#finalrefnumber)
- [formData](CreditNote.md#formdata)
- [list](CreditNote.md#list)
- [logs](CreditNote.md#logs)
- [metadata](CreditNote.md#metadata)
- [miscellaneousCost](CreditNote.md#miscellaneouscost)
- [overallDiscount](CreditNote.md#overalldiscount)
- [refFrom](CreditNote.md#reffrom)
- [refId](CreditNote.md#refid)
- [referenceId](CreditNote.md#referenceid)
- [roundOff](CreditNote.md#roundoff)
- [status](CreditNote.md#status)
- [totalValue](CreditNote.md#totalvalue)
- [vaultFolderId](CreditNote.md#vaultfolderid)
- [fields](CreditNote.md#fields)
- [runtime](CreditNote.md#runtime)
- [typeName](CreditNote.md#typename)

### Methods

- [clone](CreditNote.md#clone)
- [equals](CreditNote.md#equals)
- [fromBinary](CreditNote.md#frombinary)
- [fromJson](CreditNote.md#fromjson)
- [fromJsonString](CreditNote.md#fromjsonstring)
- [getType](CreditNote.md#gettype)
- [toBinary](CreditNote.md#tobinary)
- [toJSON](CreditNote.md#tojson)
- [toJson](CreditNote.md#tojson-1)
- [toJsonString](CreditNote.md#tojsonstring)
- [equals](CreditNote.md#equals-1)
- [fromBinary](CreditNote.md#frombinary-1)
- [fromJson](CreditNote.md#fromjson-1)
- [fromJsonString](CreditNote.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNote**(`data?`): [`CreditNote`](CreditNote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNote`](CreditNote.md)\> |

#### Returns

[`CreditNote`](CreditNote.md)

#### Overrides

Message\&lt;CreditNote\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:771](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L771)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/credit_notes.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L657)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/credit_notes.scailo_pb.ts:727](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L727)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this credit note was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/credit_notes.scailo_pb.ts:678](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L678)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/credit_notes.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L720)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/credit_notes.scailo_pb.ts:643](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L643)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/credit_notes.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L699)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/credit_notes.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L769)

___

### list

• **list**: [`CreditNoteItem`](CreditNoteItem.md)[] = `[]`

The list of associated credit note items

**`Generated`**

from field: repeated Scailo.CreditNoteItem list = 30;

#### Defined in

[src/credit_notes.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L762)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this credit note

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/credit_notes.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L671)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this credit note

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/credit_notes.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L650)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

[src/credit_notes.scailo_pb.ts:734](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L734)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

[src/credit_notes.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L741)

___

### refFrom

• **refFrom**: [`CREDIT_NOTE_REF_FROM`](../enums/CREDIT_NOTE_REF_FROM.md) = `CREDIT_NOTE_REF_FROM.CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 12;

#### Defined in

[src/credit_notes.scailo_pb.ts:706](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L706)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/credit_notes.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L713)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the credit note

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/credit_notes.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L692)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/credit_notes.scailo_pb.ts:748](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L748)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this credit note

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/credit_notes.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L664)

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the credit note (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 20;

#### Defined in

[src/credit_notes.scailo_pb.ts:755](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L755)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/credit_notes.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L685)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:778](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L778)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:776](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L776)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNote"``

#### Defined in

[src/credit_notes.scailo_pb.ts:777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L777)

## Methods

### clone

▸ **clone**(): [`CreditNote`](CreditNote.md)

Create a deep copy.

#### Returns

[`CreditNote`](CreditNote.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNote`](CreditNote.md) \| `PlainMessage`\<[`CreditNote`](CreditNote.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNote`](CreditNote.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNote`](CreditNote.md)\>

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
| `a` | `undefined` \| [`CreditNote`](CreditNote.md) \| `PlainMessage`\<[`CreditNote`](CreditNote.md)\> |
| `b` | `undefined` \| [`CreditNote`](CreditNote.md) \| `PlainMessage`\<[`CreditNote`](CreditNote.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L812)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNote`](CreditNote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNote`](CreditNote.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L800)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNote`](CreditNote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNote`](CreditNote.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L804)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNote`](CreditNote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNote`](CreditNote.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:808](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L808)
