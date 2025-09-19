[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionCode

# Class: ActionCode

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ActionCode

## Hierarchy

- `Message`\<[`ActionCode`](ActionCode.md)\>

  ↳ **`ActionCode`**

## Table of contents

### Constructors

- [constructor](ActionCode.md#constructor)

### Properties

- [approvalMetadata](ActionCode.md#approvalmetadata)
- [bgColor](ActionCode.md#bgcolor)
- [code](ActionCode.md#code)
- [description](ActionCode.md#description)
- [entityUuid](ActionCode.md#entityuuid)
- [fgColor](ActionCode.md#fgcolor)
- [isLeaf](ActionCode.md#isleaf)
- [logs](ActionCode.md#logs)
- [metadata](ActionCode.md#metadata)
- [name](ActionCode.md#name)
- [parentActionCodeId](ActionCode.md#parentactioncodeid)
- [status](ActionCode.md#status)
- [fields](ActionCode.md#fields)
- [runtime](ActionCode.md#runtime)
- [typeName](ActionCode.md#typename)

### Methods

- [clone](ActionCode.md#clone)
- [equals](ActionCode.md#equals)
- [fromBinary](ActionCode.md#frombinary)
- [fromJson](ActionCode.md#fromjson)
- [fromJsonString](ActionCode.md#fromjsonstring)
- [getType](ActionCode.md#gettype)
- [toBinary](ActionCode.md#tobinary)
- [toJSON](ActionCode.md#tojson)
- [toJson](ActionCode.md#tojson-1)
- [toJsonString](ActionCode.md#tojsonstring)
- [equals](ActionCode.md#equals-1)
- [fromBinary](ActionCode.md#frombinary-1)
- [fromJson](ActionCode.md#fromjson-1)
- [fromJsonString](ActionCode.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionCode**(`data?`): [`ActionCode`](ActionCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionCode`](ActionCode.md)\> |

#### Returns

[`ActionCode`](ActionCode.md)

#### Overrides

Message\&lt;ActionCode\&gt;.constructor

#### Defined in

[src/actions_codes.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L372)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

ActionsCodes the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/actions_codes.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L307)

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 13;

#### Defined in

[src/actions_codes.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L349)

___

### code

• **code**: `string` = `""`

The unique code by which the action code is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/actions_codes.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L335)

___

### description

• **description**: `string` = `""`

The description of the action code

**`Generated`**

from field: string description = 18;

#### Defined in

[src/actions_codes.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L370)

___

### entityUuid

• **entityUuid**: `string` = `""`

ActionsCodes a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/actions_codes.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L293)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 12;

#### Defined in

[src/actions_codes.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L342)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf action code or a non-leaf action code

**`Generated`**

from field: bool is_leaf = 17;

#### Defined in

[src/actions_codes.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L363)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

ActionsCodes the logs of every operation performed on this action code

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/actions_codes.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L321)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

ActionsCodes the metadata of this action code

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/actions_codes.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L300)

___

### name

• **name**: `string` = `""`

The name of the action code

**`Generated`**

from field: string name = 10;

#### Defined in

[src/actions_codes.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L328)

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)

**`Generated`**

from field: uint64 parent_action_code_id = 16;

#### Defined in

[src/actions_codes.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L356)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this action code

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/actions_codes.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L314)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L379)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L377)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionCode"``

#### Defined in

[src/actions_codes.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L378)

## Methods

### clone

▸ **clone**(): [`ActionCode`](ActionCode.md)

Create a deep copy.

#### Returns

[`ActionCode`](ActionCode.md)

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
| `other` | `undefined` \| ``null`` \| [`ActionCode`](ActionCode.md) \| `PlainMessage`\<[`ActionCode`](ActionCode.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActionCode`](ActionCode.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionCode`](ActionCode.md)\>

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
| `a` | `undefined` \| [`ActionCode`](ActionCode.md) \| `PlainMessage`\<[`ActionCode`](ActionCode.md)\> |
| `b` | `undefined` \| [`ActionCode`](ActionCode.md) \| `PlainMessage`\<[`ActionCode`](ActionCode.md)\> |

#### Returns

`boolean`

#### Defined in

[src/actions_codes.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L406)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionCode`](ActionCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionCode`](ActionCode.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L394)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionCode`](ActionCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionCode`](ActionCode.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L398)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionCode`](ActionCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionCode`](ActionCode.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/actions_codes.scailo_pb.ts#L402)
