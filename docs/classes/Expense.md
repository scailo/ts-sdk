[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Expense

# Class: Expense

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Expense

## Hierarchy

- `Message`\<[`Expense`](Expense.md)\>

  ↳ **`Expense`**

## Table of contents

### Constructors

- [constructor](Expense.md#constructor)

### Properties

- [approvalMetadata](Expense.md#approvalmetadata)
- [completedOn](Expense.md#completedon)
- [currencyId](Expense.md#currencyid)
- [entityUuid](Expense.md#entityuuid)
- [finalRefNumber](Expense.md#finalrefnumber)
- [formData](Expense.md#formdata)
- [list](Expense.md#list)
- [logs](Expense.md#logs)
- [metadata](Expense.md#metadata)
- [paidByUserId](Expense.md#paidbyuserid)
- [projectId](Expense.md#projectid)
- [refFrom](Expense.md#reffrom)
- [refId](Expense.md#refid)
- [referenceId](Expense.md#referenceid)
- [status](Expense.md#status)
- [totalAmount](Expense.md#totalamount)
- [vaultFolderId](Expense.md#vaultfolderid)
- [fields](Expense.md#fields)
- [runtime](Expense.md#runtime)
- [typeName](Expense.md#typename)

### Methods

- [clone](Expense.md#clone)
- [equals](Expense.md#equals)
- [fromBinary](Expense.md#frombinary)
- [fromJson](Expense.md#fromjson)
- [fromJsonString](Expense.md#fromjsonstring)
- [getType](Expense.md#gettype)
- [toBinary](Expense.md#tobinary)
- [toJSON](Expense.md#tojson)
- [toJson](Expense.md#tojson-1)
- [toJsonString](Expense.md#tojsonstring)
- [equals](Expense.md#equals-1)
- [fromBinary](Expense.md#frombinary-1)
- [fromJson](Expense.md#fromjson-1)
- [fromJsonString](Expense.md#fromjsonstring-1)

## Constructors

### constructor

• **new Expense**(`data?`): [`Expense`](Expense.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Expense`](Expense.md)\> |

#### Returns

[`Expense`](Expense.md)

#### Overrides

Message\&lt;Expense\&gt;.constructor

#### Defined in

[src/expenses.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L667)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/expenses.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L553)

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

[src/expenses.scailo_pb.ts:579](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L579)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/expenses.scailo_pb.ts:637](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L637)

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

[src/expenses.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L537)

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

[src/expenses.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L616)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/expenses.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L658)

___

### list

• **list**: [`ExpenseItem`](ExpenseItem.md)[] = `[]`

The list of associated expense items

**`Generated`**

from field: repeated Scailo.ExpenseItem list = 20;

#### Defined in

[src/expenses.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L651)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/expenses.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L569)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/expenses.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L545)

___

### paidByUserId

• **paidByUserId**: `bigint` = `protoInt64.zero`

The ID of the user who paid for this expense (if paid by organization, then this will be 0)

**`Generated`**

from field: uint64 paid_by_user_id = 15;

#### Defined in

[src/expenses.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L644)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

[src/expenses.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L586)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the expense has been created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/expenses.scailo_pb.ts:623](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L623)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference (can be 0 in case ref_from is "not-applicable")

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/expenses.scailo_pb.ts:630](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L630)

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

[src/expenses.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L606)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/expenses.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L561)

___

### totalAmount

• **totalAmount**: `number` = `0`

The total amount of the expense

**`Generated`**

from field: double total_amount = 40;

#### Defined in

[src/expenses.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L665)

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

[src/expenses.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L596)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L674)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L672)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Expense"``

#### Defined in

[src/expenses.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L673)

## Methods

### clone

▸ **clone**(): [`Expense`](Expense.md)

Create a deep copy.

#### Returns

[`Expense`](Expense.md)

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
| `other` | `undefined` \| ``null`` \| [`Expense`](Expense.md) \| `PlainMessage`\<[`Expense`](Expense.md)\> |

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

▸ **getType**(): `MessageType`\<[`Expense`](Expense.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Expense`](Expense.md)\>

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
| `a` | `undefined` \| [`Expense`](Expense.md) \| `PlainMessage`\<[`Expense`](Expense.md)\> |
| `b` | `undefined` \| [`Expense`](Expense.md) \| `PlainMessage`\<[`Expense`](Expense.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses.scailo_pb.ts:706](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L706)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Expense`](Expense.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Expense`](Expense.md)

#### Defined in

[src/expenses.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L694)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Expense`](Expense.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Expense`](Expense.md)

#### Defined in

[src/expenses.scailo_pb.ts:698](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L698)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Expense`](Expense.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Expense`](Expense.md)

#### Defined in

[src/expenses.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/expenses.scailo_pb.ts#L702)
