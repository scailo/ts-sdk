[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceCreateRequest

# Class: LeavesAdjustmentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.LeavesAdjustmentsServiceCreateRequest

## Hierarchy

- `Message`\<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\>

  ↳ **`LeavesAdjustmentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceCreateRequest.md#constructor)

### Properties

- [description](LeavesAdjustmentsServiceCreateRequest.md#description)
- [entityUuid](LeavesAdjustmentsServiceCreateRequest.md#entityuuid)
- [referenceId](LeavesAdjustmentsServiceCreateRequest.md#referenceid)
- [userComment](LeavesAdjustmentsServiceCreateRequest.md#usercomment)
- [userId](LeavesAdjustmentsServiceCreateRequest.md#userid)
- [vaultFolderId](LeavesAdjustmentsServiceCreateRequest.md#vaultfolderid)
- [fields](LeavesAdjustmentsServiceCreateRequest.md#fields)
- [runtime](LeavesAdjustmentsServiceCreateRequest.md#runtime)
- [typeName](LeavesAdjustmentsServiceCreateRequest.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceCreateRequest.md#clone)
- [equals](LeavesAdjustmentsServiceCreateRequest.md#equals)
- [fromBinary](LeavesAdjustmentsServiceCreateRequest.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceCreateRequest.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceCreateRequest.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceCreateRequest.md#gettype)
- [toBinary](LeavesAdjustmentsServiceCreateRequest.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceCreateRequest.md#tojson)
- [toJson](LeavesAdjustmentsServiceCreateRequest.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceCreateRequest.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceCreateRequest.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceCreateRequest.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceCreateRequest**(`data?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Overrides

Message\&lt;LeavesAdjustmentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L301)

## Properties

### description

• **description**: `string` = `""`

The description of the leave adjustment

**`Generated`**

from field: string description = 12;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:299](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L299)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L246)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:285](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L285)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L253)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this adjustment needs to be made

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L292)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L269)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:308](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L308)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:306](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L306)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsServiceCreateRequest"``

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L307)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L329)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:317](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L317)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L321)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCreateRequest`](LeavesAdjustmentsServiceCreateRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_adjustments.scailo_pb.ts#L325)
