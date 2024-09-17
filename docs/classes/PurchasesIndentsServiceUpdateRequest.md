[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceUpdateRequest

# Class: PurchasesIndentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.PurchasesIndentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)\>

  ↳ **`PurchasesIndentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceUpdateRequest.md#constructor)

### Properties

- [formData](PurchasesIndentsServiceUpdateRequest.md#formdata)
- [id](PurchasesIndentsServiceUpdateRequest.md#id)
- [notifyUsers](PurchasesIndentsServiceUpdateRequest.md#notifyusers)
- [referenceId](PurchasesIndentsServiceUpdateRequest.md#referenceid)
- [userComment](PurchasesIndentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](PurchasesIndentsServiceUpdateRequest.md#vaultfolderid)
- [fields](PurchasesIndentsServiceUpdateRequest.md#fields)
- [runtime](PurchasesIndentsServiceUpdateRequest.md#runtime)
- [typeName](PurchasesIndentsServiceUpdateRequest.md#typename)

### Methods

- [clone](PurchasesIndentsServiceUpdateRequest.md#clone)
- [equals](PurchasesIndentsServiceUpdateRequest.md#equals)
- [fromBinary](PurchasesIndentsServiceUpdateRequest.md#frombinary)
- [fromJson](PurchasesIndentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceUpdateRequest.md#fromjsonstring)
- [getType](PurchasesIndentsServiceUpdateRequest.md#gettype)
- [toBinary](PurchasesIndentsServiceUpdateRequest.md#tobinary)
- [toJSON](PurchasesIndentsServiceUpdateRequest.md#tojson)
- [toJson](PurchasesIndentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceUpdateRequest.md#tojsonstring)
- [equals](PurchasesIndentsServiceUpdateRequest.md#equals-1)
- [fromBinary](PurchasesIndentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceUpdateRequest**(`data?`): [`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)\> |

#### Returns

[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:351

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/purchases_indents.scailo_pb.ts:349

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/purchases_indents.scailo_pb.ts:321

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/purchases_indents.scailo_pb.ts:328

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/purchases_indents.scailo_pb.ts:342

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_indents.scailo_pb.ts:314

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/purchases_indents.scailo_pb.ts:335

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:358

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:356

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceUpdateRequest"``

#### Defined in

src/purchases_indents.scailo_pb.ts:357

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:379

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:367

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:371

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceUpdateRequest`](PurchasesIndentsServiceUpdateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:375
