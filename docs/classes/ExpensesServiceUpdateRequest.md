[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceUpdateRequest

# Class: ExpensesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ExpensesServiceUpdateRequest

## Hierarchy

- `Message`\<[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)\>

  ↳ **`ExpensesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceUpdateRequest.md#constructor)

### Properties

- [currencyId](ExpensesServiceUpdateRequest.md#currencyid)
- [formData](ExpensesServiceUpdateRequest.md#formdata)
- [id](ExpensesServiceUpdateRequest.md#id)
- [notifyUsers](ExpensesServiceUpdateRequest.md#notifyusers)
- [paidByUserId](ExpensesServiceUpdateRequest.md#paidbyuserid)
- [projectId](ExpensesServiceUpdateRequest.md#projectid)
- [refFrom](ExpensesServiceUpdateRequest.md#reffrom)
- [refId](ExpensesServiceUpdateRequest.md#refid)
- [referenceId](ExpensesServiceUpdateRequest.md#referenceid)
- [userComment](ExpensesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ExpensesServiceUpdateRequest.md#vaultfolderid)
- [fields](ExpensesServiceUpdateRequest.md#fields)
- [runtime](ExpensesServiceUpdateRequest.md#runtime)
- [typeName](ExpensesServiceUpdateRequest.md#typename)

### Methods

- [clone](ExpensesServiceUpdateRequest.md#clone)
- [equals](ExpensesServiceUpdateRequest.md#equals)
- [fromBinary](ExpensesServiceUpdateRequest.md#frombinary)
- [fromJson](ExpensesServiceUpdateRequest.md#fromjson)
- [fromJsonString](ExpensesServiceUpdateRequest.md#fromjsonstring)
- [getType](ExpensesServiceUpdateRequest.md#gettype)
- [toBinary](ExpensesServiceUpdateRequest.md#tobinary)
- [toJSON](ExpensesServiceUpdateRequest.md#tojson)
- [toJson](ExpensesServiceUpdateRequest.md#tojson-1)
- [toJsonString](ExpensesServiceUpdateRequest.md#tojsonstring)
- [equals](ExpensesServiceUpdateRequest.md#equals-1)
- [fromBinary](ExpensesServiceUpdateRequest.md#frombinary-1)
- [fromJson](ExpensesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ExpensesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceUpdateRequest**(`data?`): [`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)\> |

#### Returns

[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

#### Overrides

Message\&lt;ExpensesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/expenses.scailo_pb.ts:434

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

src/expenses.scailo_pb.ts:418

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/expenses.scailo_pb.ts:432

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/expenses.scailo_pb.ts:369

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/expenses.scailo_pb.ts:376

___

### paidByUserId

• **paidByUserId**: `bigint` = `protoInt64.zero`

The ID of the user who paid for this expense (if paid by organization, then this will be 0)

**`Generated`**

from field: uint64 paid_by_user_id = 15;

#### Defined in

src/expenses.scailo_pb.ts:425

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

src/expenses.scailo_pb.ts:383

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the expense has been created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/expenses.scailo_pb.ts:404

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference (can be 0 in case ref_from is "not-applicable")

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/expenses.scailo_pb.ts:411

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the expense

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/expenses.scailo_pb.ts:397

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/expenses.scailo_pb.ts:362

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/expenses.scailo_pb.ts:390

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:441

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:439

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesServiceUpdateRequest"``

#### Defined in

src/expenses.scailo_pb.ts:440

## Methods

### clone

▸ **clone**(): [`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md) \| `PlainMessage`\<[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md) \| `PlainMessage`\<[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md) \| `PlainMessage`\<[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/expenses.scailo_pb.ts:467

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:455

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:459

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceUpdateRequest`](ExpensesServiceUpdateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:463
