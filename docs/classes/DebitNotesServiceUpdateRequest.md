[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceUpdateRequest

# Class: DebitNotesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.DebitNotesServiceUpdateRequest

## Hierarchy

- `Message`\<[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)\>

  ↳ **`DebitNotesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceUpdateRequest.md#constructor)

### Properties

- [currencyId](DebitNotesServiceUpdateRequest.md#currencyid)
- [formData](DebitNotesServiceUpdateRequest.md#formdata)
- [id](DebitNotesServiceUpdateRequest.md#id)
- [miscellaneousCost](DebitNotesServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](DebitNotesServiceUpdateRequest.md#notifyusers)
- [overallDiscount](DebitNotesServiceUpdateRequest.md#overalldiscount)
- [referenceId](DebitNotesServiceUpdateRequest.md#referenceid)
- [roundOff](DebitNotesServiceUpdateRequest.md#roundoff)
- [userComment](DebitNotesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](DebitNotesServiceUpdateRequest.md#vaultfolderid)
- [fields](DebitNotesServiceUpdateRequest.md#fields)
- [runtime](DebitNotesServiceUpdateRequest.md#runtime)
- [typeName](DebitNotesServiceUpdateRequest.md#typename)

### Methods

- [clone](DebitNotesServiceUpdateRequest.md#clone)
- [equals](DebitNotesServiceUpdateRequest.md#equals)
- [fromBinary](DebitNotesServiceUpdateRequest.md#frombinary)
- [fromJson](DebitNotesServiceUpdateRequest.md#fromjson)
- [fromJsonString](DebitNotesServiceUpdateRequest.md#fromjsonstring)
- [getType](DebitNotesServiceUpdateRequest.md#gettype)
- [toBinary](DebitNotesServiceUpdateRequest.md#tobinary)
- [toJSON](DebitNotesServiceUpdateRequest.md#tojson)
- [toJson](DebitNotesServiceUpdateRequest.md#tojson-1)
- [toJsonString](DebitNotesServiceUpdateRequest.md#tojsonstring)
- [equals](DebitNotesServiceUpdateRequest.md#equals-1)
- [fromBinary](DebitNotesServiceUpdateRequest.md#frombinary-1)
- [fromJson](DebitNotesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](DebitNotesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceUpdateRequest**(`data?`): [`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)\> |

#### Returns

[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

#### Overrides

Message\&lt;DebitNotesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L561)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/debit_notes.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L524)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/debit_notes.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L559)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L473)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 15;

#### Defined in

[src/debit_notes.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L531)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/debit_notes.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L485)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 16;

#### Defined in

[src/debit_notes.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L538)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/debit_notes.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L517)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/debit_notes.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L545)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L457)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/debit_notes.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L501)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:568](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L568)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L566)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceUpdateRequest"``

#### Defined in

[src/debit_notes.scailo_pb.ts:567](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L567)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:593](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L593)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L581)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L585)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceUpdateRequest`](DebitNotesServiceUpdateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/debit_notes.scailo_pb.ts#L589)
