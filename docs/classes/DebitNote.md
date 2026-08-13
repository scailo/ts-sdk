[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNote

# Class: DebitNote

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.DebitNote

## Hierarchy

- `Message`\<[`DebitNote`](DebitNote.md)\>

  ↳ **`DebitNote`**

## Table of contents

### Constructors

- [constructor](DebitNote.md#constructor)

### Properties

- [approvalMetadata](DebitNote.md#approvalmetadata)
- [completedOn](DebitNote.md#completedon)
- [currencyId](DebitNote.md#currencyid)
- [entityUuid](DebitNote.md#entityuuid)
- [finalRefNumber](DebitNote.md#finalrefnumber)
- [formData](DebitNote.md#formdata)
- [list](DebitNote.md#list)
- [logs](DebitNote.md#logs)
- [metadata](DebitNote.md#metadata)
- [miscellaneousCost](DebitNote.md#miscellaneouscost)
- [overallDiscount](DebitNote.md#overalldiscount)
- [refFrom](DebitNote.md#reffrom)
- [refId](DebitNote.md#refid)
- [referenceId](DebitNote.md#referenceid)
- [roundOff](DebitNote.md#roundoff)
- [status](DebitNote.md#status)
- [totalValue](DebitNote.md#totalvalue)
- [vaultFolderId](DebitNote.md#vaultfolderid)
- [fields](DebitNote.md#fields)
- [runtime](DebitNote.md#runtime)
- [typeName](DebitNote.md#typename)

### Methods

- [clone](DebitNote.md#clone)
- [equals](DebitNote.md#equals)
- [fromBinary](DebitNote.md#frombinary)
- [fromJson](DebitNote.md#fromjson)
- [fromJsonString](DebitNote.md#fromjsonstring)
- [getType](DebitNote.md#gettype)
- [toBinary](DebitNote.md#tobinary)
- [toJSON](DebitNote.md#tojson)
- [toJson](DebitNote.md#tojson-1)
- [toJsonString](DebitNote.md#tojsonstring)
- [equals](DebitNote.md#equals-1)
- [fromBinary](DebitNote.md#frombinary-1)
- [fromJson](DebitNote.md#fromjson-1)
- [fromJsonString](DebitNote.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNote**(`data?`): [`DebitNote`](DebitNote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNote`](DebitNote.md)\> |

#### Returns

[`DebitNote`](DebitNote.md)

#### Overrides

Message\&lt;DebitNote\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L860)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/debit_notes.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L738)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/debit_notes.scailo_pb.ts:764](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L764)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/debit_notes.scailo_pb.ts:815](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L815)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:722](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L722)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/debit_notes.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L794)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/debit_notes.scailo_pb.ts:858](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L858)

___

### list

• **list**: [`DebitNoteItem`](DebitNoteItem.md)[] = `[]`

The list of associated debit note items

**`Generated`**

from field: repeated Scailo.DebitNoteItem list = 30;

#### Defined in

[src/debit_notes.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L850)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/debit_notes.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L754)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L730)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 15;

#### Defined in

[src/debit_notes.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L822)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 16;

#### Defined in

[src/debit_notes.scailo_pb.ts:829](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L829)

___

### refFrom

• **refFrom**: [`DEBIT_NOTE_REF_FROM`](../enums/DEBIT_NOTE_REF_FROM.md) = `DEBIT_NOTE_REF_FROM.DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 12;

#### Defined in

[src/debit_notes.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L801)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/debit_notes.scailo_pb.ts:808](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L808)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/debit_notes.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L784)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/debit_notes.scailo_pb.ts:836](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L836)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/debit_notes.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L746)

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the debit note (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 20;

#### Defined in

[src/debit_notes.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L843)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/debit_notes.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L774)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L867)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L865)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNote"``

#### Defined in

[src/debit_notes.scailo_pb.ts:866](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L866)

## Methods

### clone

▸ **clone**(): [`DebitNote`](DebitNote.md)

Create a deep copy.

#### Returns

[`DebitNote`](DebitNote.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNote`](DebitNote.md) \| `PlainMessage`\<[`DebitNote`](DebitNote.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNote`](DebitNote.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNote`](DebitNote.md)\>

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
| `a` | `undefined` \| [`DebitNote`](DebitNote.md) \| `PlainMessage`\<[`DebitNote`](DebitNote.md)\> |
| `b` | `undefined` \| [`DebitNote`](DebitNote.md) \| `PlainMessage`\<[`DebitNote`](DebitNote.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L900)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNote`](DebitNote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNote`](DebitNote.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L888)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNote`](DebitNote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNote`](DebitNote.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L892)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNote`](DebitNote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNote`](DebitNote.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:896](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L896)
