[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobInwardItem

# Class: InwardJobInwardItem

Describes the parameters that constitute an inward item associated to a inward job

**`Generated`**

from message Scailo.InwardJobInwardItem

## Hierarchy

- `Message`\<[`InwardJobInwardItem`](InwardJobInwardItem.md)\>

  ↳ **`InwardJobInwardItem`**

## Table of contents

### Constructors

- [constructor](InwardJobInwardItem.md#constructor)

### Properties

- [approvalMetadata](InwardJobInwardItem.md#approvalmetadata)
- [clientFamilyCode](InwardJobInwardItem.md#clientfamilycode)
- [clientQuantity](InwardJobInwardItem.md#clientquantity)
- [clientUomId](InwardJobInwardItem.md#clientuomid)
- [entityUuid](InwardJobInwardItem.md#entityuuid)
- [familyId](InwardJobInwardItem.md#familyid)
- [internalQuantity](InwardJobInwardItem.md#internalquantity)
- [inwardJobId](InwardJobInwardItem.md#inwardjobid)
- [metadata](InwardJobInwardItem.md#metadata)
- [needApproval](InwardJobInwardItem.md#needapproval)
- [specifications](InwardJobInwardItem.md#specifications)
- [userComment](InwardJobInwardItem.md#usercomment)
- [fields](InwardJobInwardItem.md#fields)
- [runtime](InwardJobInwardItem.md#runtime)
- [typeName](InwardJobInwardItem.md#typename)

### Methods

- [clone](InwardJobInwardItem.md#clone)
- [equals](InwardJobInwardItem.md#equals)
- [fromBinary](InwardJobInwardItem.md#frombinary)
- [fromJson](InwardJobInwardItem.md#fromjson)
- [fromJsonString](InwardJobInwardItem.md#fromjsonstring)
- [getType](InwardJobInwardItem.md#gettype)
- [toBinary](InwardJobInwardItem.md#tobinary)
- [toJSON](InwardJobInwardItem.md#tojson)
- [toJson](InwardJobInwardItem.md#tojson-1)
- [toJsonString](InwardJobInwardItem.md#tojsonstring)
- [equals](InwardJobInwardItem.md#equals-1)
- [fromBinary](InwardJobInwardItem.md#frombinary-1)
- [fromJson](InwardJobInwardItem.md#fromjson-1)
- [fromJsonString](InwardJobInwardItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobInwardItem**(`data?`): [`InwardJobInwardItem`](InwardJobInwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobInwardItem`](InwardJobInwardItem.md)\> |

#### Returns

[`InwardJobInwardItem`](InwardJobInwardItem.md)

#### Overrides

Message\&lt;InwardJobInwardItem\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:1303](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1303)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1238)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1294)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1287](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1287)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1280)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1224](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1224)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1266)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1273)

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

Stores the inward job ID

**`Generated`**

from field: uint64 inward_job_id = 10;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1259](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1259)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this inward job

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1231)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1245)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 16;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1301)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1252)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1310](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1310)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1308)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobInwardItem"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:1309](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1309)

## Methods

### clone

▸ **clone**(): [`InwardJobInwardItem`](InwardJobInwardItem.md)

Create a deep copy.

#### Returns

[`InwardJobInwardItem`](InwardJobInwardItem.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobInwardItem`](InwardJobInwardItem.md) \| `PlainMessage`\<[`InwardJobInwardItem`](InwardJobInwardItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobInwardItem`](InwardJobInwardItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobInwardItem`](InwardJobInwardItem.md)\>

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
| `a` | `undefined` \| [`InwardJobInwardItem`](InwardJobInwardItem.md) \| `PlainMessage`\<[`InwardJobInwardItem`](InwardJobInwardItem.md)\> |
| `b` | `undefined` \| [`InwardJobInwardItem`](InwardJobInwardItem.md) \| `PlainMessage`\<[`InwardJobInwardItem`](InwardJobInwardItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1337)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobInwardItem`](InwardJobInwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobInwardItem`](InwardJobInwardItem.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1325](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1325)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobInwardItem`](InwardJobInwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobInwardItem`](InwardJobInwardItem.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1329)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobInwardItem`](InwardJobInwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobInwardItem`](InwardJobInwardItem.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1333)
