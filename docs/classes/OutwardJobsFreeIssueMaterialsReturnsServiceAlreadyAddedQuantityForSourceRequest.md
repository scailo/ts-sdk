[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest

# Class: OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1357

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1355

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1341

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1348

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1364

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1362

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1363

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1382

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1370

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1374

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1378
