[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceCreateRequest

# Class: ExpensesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ExpensesServiceCreateRequest

## Hierarchy

- `Message`\<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\>

  ↳ **`ExpensesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceCreateRequest.md#constructor)

### Properties

- [currencyId](ExpensesServiceCreateRequest.md#currencyid)
- [entityUuid](ExpensesServiceCreateRequest.md#entityuuid)
- [formData](ExpensesServiceCreateRequest.md#formdata)
- [paidByUserId](ExpensesServiceCreateRequest.md#paidbyuserid)
- [projectId](ExpensesServiceCreateRequest.md#projectid)
- [refFrom](ExpensesServiceCreateRequest.md#reffrom)
- [refId](ExpensesServiceCreateRequest.md#refid)
- [referenceId](ExpensesServiceCreateRequest.md#referenceid)
- [userComment](ExpensesServiceCreateRequest.md#usercomment)
- [vaultFolderId](ExpensesServiceCreateRequest.md#vaultfolderid)
- [fields](ExpensesServiceCreateRequest.md#fields)
- [runtime](ExpensesServiceCreateRequest.md#runtime)
- [typeName](ExpensesServiceCreateRequest.md#typename)

### Methods

- [clone](ExpensesServiceCreateRequest.md#clone)
- [equals](ExpensesServiceCreateRequest.md#equals)
- [fromBinary](ExpensesServiceCreateRequest.md#frombinary)
- [fromJson](ExpensesServiceCreateRequest.md#fromjson)
- [fromJsonString](ExpensesServiceCreateRequest.md#fromjsonstring)
- [getType](ExpensesServiceCreateRequest.md#gettype)
- [toBinary](ExpensesServiceCreateRequest.md#tobinary)
- [toJSON](ExpensesServiceCreateRequest.md#tojson)
- [toJson](ExpensesServiceCreateRequest.md#tojson-1)
- [toJsonString](ExpensesServiceCreateRequest.md#tojsonstring)
- [equals](ExpensesServiceCreateRequest.md#equals-1)
- [fromBinary](ExpensesServiceCreateRequest.md#frombinary-1)
- [fromJson](ExpensesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ExpensesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceCreateRequest**(`data?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Overrides

Message\&lt;ExpensesServiceCreateRequest\&gt;.constructor

#### Defined in

src/expenses.scailo_pb.ts:313

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

src/expenses.scailo_pb.ts:297

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/expenses.scailo_pb.ts:248

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/expenses.scailo_pb.ts:311

___

### paidByUserId

• **paidByUserId**: `bigint` = `protoInt64.zero`

The ID of the user who paid for this expense (if paid by organization, then this will be 0)

**`Generated`**

from field: uint64 paid_by_user_id = 15;

#### Defined in

src/expenses.scailo_pb.ts:304

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

src/expenses.scailo_pb.ts:262

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the expense has been created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/expenses.scailo_pb.ts:283

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference (can be 0 in case ref_from is "not-applicable")

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/expenses.scailo_pb.ts:290

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the expense

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/expenses.scailo_pb.ts:276

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/expenses.scailo_pb.ts:255

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/expenses.scailo_pb.ts:269

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:320

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:318

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesServiceCreateRequest"``

#### Defined in

src/expenses.scailo_pb.ts:319

## Methods

### clone

▸ **clone**(): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md) \| `PlainMessage`\<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md) \| `PlainMessage`\<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md) \| `PlainMessage`\<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/expenses.scailo_pb.ts:345

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:333

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:337

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:341
