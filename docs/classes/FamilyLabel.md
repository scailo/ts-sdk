[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyLabel

# Class: FamilyLabel

Describes the parameters that constitute a family label

**`Generated`**

from message Scailo.FamilyLabel

## Hierarchy

- `Message`\<[`FamilyLabel`](FamilyLabel.md)\>

  ↳ **`FamilyLabel`**

## Table of contents

### Constructors

- [constructor](FamilyLabel.md#constructor)

### Properties

- [approvalMetadata](FamilyLabel.md#approvalmetadata)
- [entityUuid](FamilyLabel.md#entityuuid)
- [familyId](FamilyLabel.md#familyid)
- [labelId](FamilyLabel.md#labelid)
- [metadata](FamilyLabel.md#metadata)
- [needApproval](FamilyLabel.md#needapproval)
- [userComment](FamilyLabel.md#usercomment)
- [fields](FamilyLabel.md#fields)
- [runtime](FamilyLabel.md#runtime)
- [typeName](FamilyLabel.md#typename)

### Methods

- [clone](FamilyLabel.md#clone)
- [equals](FamilyLabel.md#equals)
- [fromBinary](FamilyLabel.md#frombinary)
- [fromJson](FamilyLabel.md#fromjson)
- [fromJsonString](FamilyLabel.md#fromjsonstring)
- [getType](FamilyLabel.md#gettype)
- [toBinary](FamilyLabel.md#tobinary)
- [toJSON](FamilyLabel.md#tojson)
- [toJson](FamilyLabel.md#tojson-1)
- [toJsonString](FamilyLabel.md#tojsonstring)
- [equals](FamilyLabel.md#equals-1)
- [fromBinary](FamilyLabel.md#frombinary-1)
- [fromJson](FamilyLabel.md#fromjson-1)
- [fromJsonString](FamilyLabel.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyLabel**(`data?`): [`FamilyLabel`](FamilyLabel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyLabel`](FamilyLabel.md)\> |

#### Returns

[`FamilyLabel`](FamilyLabel.md)

#### Overrides

Message\&lt;FamilyLabel\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1932)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/families.scailo_pb.ts:1902](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1902)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/families.scailo_pb.ts:1888](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1888)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/families.scailo_pb.ts:1923](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1923)

___

### labelId

• **labelId**: `bigint` = `protoInt64.zero`

Stores the label ID

**`Generated`**

from field: uint64 label_id = 11;

#### Defined in

[src/families.scailo_pb.ts:1930](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1930)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this family

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/families.scailo_pb.ts:1895](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1895)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/families.scailo_pb.ts:1909](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1909)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/families.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1916)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:1939](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1939)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1937)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyLabel"``

#### Defined in

[src/families.scailo_pb.ts:1938](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1938)

## Methods

### clone

▸ **clone**(): [`FamilyLabel`](FamilyLabel.md)

Create a deep copy.

#### Returns

[`FamilyLabel`](FamilyLabel.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyLabel`](FamilyLabel.md) \| `PlainMessage`\<[`FamilyLabel`](FamilyLabel.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyLabel`](FamilyLabel.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyLabel`](FamilyLabel.md)\>

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
| `a` | `undefined` \| [`FamilyLabel`](FamilyLabel.md) \| `PlainMessage`\<[`FamilyLabel`](FamilyLabel.md)\> |
| `b` | `undefined` \| [`FamilyLabel`](FamilyLabel.md) \| `PlainMessage`\<[`FamilyLabel`](FamilyLabel.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:1961](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1961)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyLabel`](FamilyLabel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyLabel`](FamilyLabel.md)

#### Defined in

[src/families.scailo_pb.ts:1949](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1949)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyLabel`](FamilyLabel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyLabel`](FamilyLabel.md)

#### Defined in

[src/families.scailo_pb.ts:1953](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1953)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyLabel`](FamilyLabel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyLabel`](FamilyLabel.md)

#### Defined in

[src/families.scailo_pb.ts:1957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L1957)
