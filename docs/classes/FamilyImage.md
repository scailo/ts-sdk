[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyImage

# Class: FamilyImage

Represents a visual asset association tied to a family, dictating its presentation order and access visibility.

**`Generated`**

from message Scailo.FamilyImage

## Hierarchy

- `Message`\<[`FamilyImage`](FamilyImage.md)\>

  ↳ **`FamilyImage`**

## Table of contents

### Constructors

- [constructor](FamilyImage.md#constructor)

### Properties

- [approvalMetadata](FamilyImage.md#approvalmetadata)
- [entityUuid](FamilyImage.md#entityuuid)
- [familyId](FamilyImage.md#familyid)
- [isPublic](FamilyImage.md#ispublic)
- [metadata](FamilyImage.md#metadata)
- [needApproval](FamilyImage.md#needapproval)
- [sequenceNumber](FamilyImage.md#sequencenumber)
- [userComment](FamilyImage.md#usercomment)
- [vaultFileId](FamilyImage.md#vaultfileid)
- [fields](FamilyImage.md#fields)
- [runtime](FamilyImage.md#runtime)
- [typeName](FamilyImage.md#typename)

### Methods

- [clone](FamilyImage.md#clone)
- [equals](FamilyImage.md#equals)
- [fromBinary](FamilyImage.md#frombinary)
- [fromJson](FamilyImage.md#fromjson)
- [fromJsonString](FamilyImage.md#fromjsonstring)
- [getType](FamilyImage.md#gettype)
- [toBinary](FamilyImage.md#tobinary)
- [toJSON](FamilyImage.md#tojson)
- [toJson](FamilyImage.md#tojson-1)
- [toJsonString](FamilyImage.md#tojsonstring)
- [equals](FamilyImage.md#equals-1)
- [fromBinary](FamilyImage.md#frombinary-1)
- [fromJson](FamilyImage.md#fromjson-1)
- [fromJsonString](FamilyImage.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyImage**(`data?`): [`FamilyImage`](FamilyImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyImage`](FamilyImage.md)\> |

#### Returns

[`FamilyImage`](FamilyImage.md)

#### Overrides

Message\&lt;FamilyImage\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:4408](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4408)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/families.scailo_pb.ts:4344](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4344)

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

[src/families.scailo_pb.ts:4328](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4328)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the associated family.

**`Example`**

```ts
582
```

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/families.scailo_pb.ts:4376](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4376)

___

### isPublic

• **isPublic**: `boolean` = `false`

**`Description`**

A boolean flag indicating if the image is publicly accessible.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool is_public = 12;

#### Defined in

[src/families.scailo_pb.ts:4396](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4396)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/families.scailo_pb.ts:4336](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4336)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/families.scailo_pb.ts:4356](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4356)

___

### sequenceNumber

• **sequenceNumber**: `bigint` = `protoInt64.zero`

**`Description`**

The sequential display order of the image.

**`Example`**

```ts
1
```

**`Generated`**

from field: uint64 sequence_number = 13;

#### Defined in

[src/families.scailo_pb.ts:4406](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4406)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/families.scailo_pb.ts:4366](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4366)

___

### vaultFileId

• **vaultFileId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the vault file acting as the image source.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_file_id = 11;

#### Defined in

[src/families.scailo_pb.ts:4386](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4386)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:4415](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4415)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:4413](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4413)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyImage"``

#### Defined in

[src/families.scailo_pb.ts:4414](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4414)

## Methods

### clone

▸ **clone**(): [`FamilyImage`](FamilyImage.md)

Create a deep copy.

#### Returns

[`FamilyImage`](FamilyImage.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyImage`](FamilyImage.md) \| `PlainMessage`\<[`FamilyImage`](FamilyImage.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyImage`](FamilyImage.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyImage`](FamilyImage.md)\>

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
| `a` | `undefined` \| [`FamilyImage`](FamilyImage.md) \| `PlainMessage`\<[`FamilyImage`](FamilyImage.md)\> |
| `b` | `undefined` \| [`FamilyImage`](FamilyImage.md) \| `PlainMessage`\<[`FamilyImage`](FamilyImage.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:4439](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4439)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyImage`](FamilyImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyImage`](FamilyImage.md)

#### Defined in

[src/families.scailo_pb.ts:4427](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4427)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyImage`](FamilyImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyImage`](FamilyImage.md)

#### Defined in

[src/families.scailo_pb.ts:4431](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4431)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyImage`](FamilyImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyImage`](FamilyImage.md)

#### Defined in

[src/families.scailo_pb.ts:4435](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L4435)
